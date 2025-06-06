import {
  Float,
  PerspectiveCamera,
  useScroll,
  Environment,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Euler, Group, Vector3 } from "three";
import { Airplane } from "./Airplane";
import { Background } from "./Background";
import { Cloud } from "./Cloud";
import { Speed } from "./Speed";
import { TextSection } from "./TextSection";
import { usePlay } from "../context/Play";
import { useModal } from "../context/modal";

const LINE_NB_POINTS = 500;
const CURVE_DISTANCE = 250;
const CURVE_AHEAD_CAMERA = 0.008;
const CURVE_AHEAD_AIRPLANE = 0.02;
const AIRPLANE_MAX_ANGLE = 35;

export const Experience = () => {
  const { openModal, closeModal, modalData } = useModal();
  const [currentIslandIndex, setCurrentIslandIndex] = useState(-1);
  const { play, setHasScroll, end, setEnd, isPaused, setIsPaused } = usePlay();
  const islandMaterials = useRef({});
  const previousCameraPosition = useRef(new THREE.Vector3(0, 0, 5));
  const isRestoringCamera = useRef(false);
  const scrollDirection = useRef(0); // 1 untuk scroll ke bawah, -1 untuk scroll ke atas
  const lastScrollOffset = useRef(0);

  const curvePoints = useMemo(
    () => [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 0, -CURVE_DISTANCE),
      new THREE.Vector3(100, 0, -2 * CURVE_DISTANCE),
      new THREE.Vector3(-100, 0, -3 * CURVE_DISTANCE),
      new THREE.Vector3(100, 0, -4 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -5 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -6 * CURVE_DISTANCE),
      new THREE.Vector3(0, 0, -7 * CURVE_DISTANCE),
    ],
    []
  );

  const sceneOpacity = useRef(0);
  const lineMaterialRef = useRef();

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(curvePoints, false, "catmullrom", 0.5);
  }, [curvePoints]);

  const curvePointsGenerated = useMemo(() => curve.getPoints(200), [curve]);
  const totalPoints = curvePointsGenerated.length - 1;

  const getScrollThresholdFromPosition = (position, offset = 0) => {
    let closestIndex = 0;
    let minDist = Infinity;

    for (let i = 0; i < curvePointsGenerated.length; i++) {
      const dist = curvePointsGenerated[i].distanceTo(position);
      if (dist < minDist) {
        minDist = dist;
        closestIndex = i;
      }
    }

    return closestIndex / totalPoints + offset;
  };

  const textSections = useMemo(() => {
    const sections = [
      {
        cameraRailDist: -1,
        position: new THREE.Vector3(
          curvePoints[1].x - 3,
          curvePoints[1].y,
          curvePoints[1].z
        ),
        subtitle: `Welcome to Wawatmos,\nHave a seat and enjoy the ride!`,
        modelType: "island1",
        modelProps: {
          position: new THREE.Vector3(-10, -2, -10),
          scale: 1,
          rotation: new THREE.Euler(0, Math.PI / 4, 0),
        },
        islandName: "Island 1",
      },
      {
        cameraRailDist: 1.5,
        position: new THREE.Vector3(
          curvePoints[2].x + 2,
          curvePoints[2].y,
          curvePoints[2].z
        ),
        title: "Services",
        subtitle: `Do you want a drink?\nWe have a wide range of beverages!`,
        modelType: "island2",
        modelProps: {
          position: new THREE.Vector3(8, -3, -15),
          scale: 1.2,
          rotation: new THREE.Euler(0, -Math.PI / 6, 0),
        },
        islandName: "Island 2",
      },
      {
        cameraRailDist: -1,
        position: new THREE.Vector3(
          curvePoints[3].x - 3,
          curvePoints[3].y,
          curvePoints[3].z
        ),
        title: "Fear of flying?",
        subtitle: `Our flight attendants will help you have a great journey`,
        modelType: "island3",
        modelProps: {
          position: new THREE.Vector3(-12, -2.5, -20),
          scale: 1,
          rotation: new THREE.Euler(0, Math.PI / 3, 0),
        },
        islandName: "Island 3",
      },
      {
        cameraRailDist: 1.5,
        position: new THREE.Vector3(
          curvePoints[4].x + 3.5,
          curvePoints[4].y,
          curvePoints[4].z - 12
        ),
        title: "Pulau 4",
        subtitle: `We provide a large selection of medias, we highly recommend you Porco Rosso during the flight`,
        modelType: "island4",
        modelProps: {
          position: new THREE.Vector3(10, -3, -25),
          scale: 1.5,
          rotation: new THREE.Euler(0, -Math.PI / 4, 0),
        },
        islandName: "Island 4",
      },
      
    ];

    // Tambahkan scrollThreshold dan urutkan berdasarkan threshold
    const sectionsWithThreshold = sections.map((section, i) => ({
      ...section,
      scrollThreshold: getScrollThresholdFromPosition(
        section.position,
        [0.06, 0.07, 0.115, 0.095][i] // Sesuaikan offset
      ),
    }));

    // Urutkan sections berdasarkan scrollThreshold untuk memastikan urutan yang benar
    return sectionsWithThreshold.sort(
      (a, b) => a.scrollThreshold - b.scrollThreshold
    );
  }, [curvePoints, curvePointsGenerated, totalPoints]);

  const clouds = useMemo(
    () => [
      { position: new Vector3(-3.5, -3.2, -7) },
      { position: new Vector3(3.5, -4, -10) },
      {
        scale: new Vector3(4, 4, 4),
        position: new Vector3(-18, 0.2, -68),
        rotation: new Euler(-Math.PI / 5, Math.PI / 6, 0),
      },
      {
        scale: new Vector3(2.5, 2.5, 2.5),
        position: new Vector3(10, -1.2, -52),
      },
      {
        scale: new Vector3(4, 4, 4),
        position: new Vector3(
          curvePoints[1].x + 10,
          curvePoints[1].y - 4,
          curvePoints[1].z + 64
        ),
      },
      {
        scale: new Vector3(3, 3, 3),
        position: new Vector3(
          curvePoints[1].x - 20,
          curvePoints[1].y + 4,
          curvePoints[1].z + 28
        ),
        rotation: new Euler(0, Math.PI / 7, 0),
      },
      {
        rotation: new Euler(0, Math.PI / 7, Math.PI / 5),
        scale: new Vector3(5, 5, 5),
        position: new Vector3(
          curvePoints[1].x - 13,
          curvePoints[1].y + 4,
          curvePoints[1].z - 62
        ),
      },
      {
        rotation: new Euler(Math.PI / 2, Math.PI / 2, Math.PI / 3),
        scale: new Vector3(5, 5, 5),
        position: new Vector3(
          curvePoints[1].x + 54,
          curvePoints[1].y + 2,
          curvePoints[1].z - 82
        ),
      },
      {
        scale: new Vector3(5, 5, 5),
        position: new Vector3(
          curvePoints[1].x + 8,
          curvePoints[1].y - 14,
          curvePoints[1].z - 22
        ),
      },
      {
        scale: new Vector3(3, 3, 3),
        position: new Vector3(
          curvePoints[2].x + 6,
          curvePoints[2].y - 7,
          curvePoints[2].z + 50
        ),
      },
      {
        scale: new Vector3(2, 2, 2),
        position: new Vector3(
          curvePoints[2].x - 2,
          curvePoints[2].y + 4,
          curvePoints[2].z - 26
        ),
      },
      {
        scale: new Vector3(4, 4, 4),
        position: new Vector3(
          curvePoints[2].x + 12,
          curvePoints[2].y + 1,
          curvePoints[2].z - 86
        ),
        rotation: new Euler(Math.PI / 4, 0, Math.PI / 3),
      },
      {
        scale: new Vector3(3, 3, 3),
        position: new Vector3(
          curvePoints[3].x + 3,
          curvePoints[3].y - 10,
          curvePoints[3].z + 50
        ),
      },
      {
        scale: new Vector3(3, 3, 3),
        position: new Vector3(
          curvePoints[3].x - 10,
          curvePoints[3].y,
          curvePoints[3].z + 30
        ),
        rotation: new Euler(Math.PI / 4, 0, Math.PI / 5),
      },
      {
        scale: new Vector3(4, 4, 4),
        position: new Vector3(
          curvePoints[3].x - 20,
          curvePoints[3].y - 5,
          curvePoints[3].z - 8
        ),
        rotation: new Euler(Math.PI, 0, Math.PI / 5),
      },
      {
        scale: new Vector3(5, 5, 5),
        position: new Vector3(
          curvePoints[3].x + 0,
          curvePoints[3].y - 5,
          curvePoints[3].z - 98
        ),
        rotation: new Euler(0, Math.PI / 3, 0),
      },
      {
        scale: new Vector3(2, 2, 2),
        position: new Vector3(
          curvePoints[4].x + 3,
          curvePoints[4].y - 10,
          curvePoints[4].z + 2
        ),
      },
      {
        scale: new Vector3(3, 3, 3),
        position: new Vector3(
          curvePoints[4].x + 24,
          curvePoints[4].y - 6,
          curvePoints[4].z - 42
        ),
        rotation: new Euler(Math.PI / 4, 0, Math.PI / 5),
      },
      {
        scale: new Vector3(3, 3, 3),
        position: new Vector3(
          curvePoints[4].x - 4,
          curvePoints[4].y + 9,
          curvePoints[4].z - 62
        ),
        rotation: new Euler(Math.PI / 3, 0, Math.PI / 3),
      },
      {
        scale: new Vector3(3, 3, 3),
        position: new Vector3(
          curvePoints[7].x + 12,
          curvePoints[7].y - 5,
          curvePoints[7].z + 60
        ),
        rotation: new Euler(-Math.PI / 4, -Math.PI / 6, 0),
      },
      {
        scale: new Vector3(3, 3, 3),
        position: new Vector3(
          curvePoints[7].x - 12,
          curvePoints[7].y + 5,
          curvePoints[7].z + 120
        ),
        rotation: new Euler(Math.PI / 4, Math.PI / 6, 0),
      },
    ],
    [curvePoints]
  );

  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.08);
    shape.lineTo(0, 0.08);
    return shape;
  }, []);

  const cameraGroup = useRef();
  const cameraRail = useRef();
  const camera = useRef();
  const scroll = useScroll();
  const lastScroll = useRef(0);
  const airplane = useRef();

  const tl = useRef();
  const backgroundColors = useRef({
    colorA: "#1a237e",
    colorB: "#000051",
  });
  const planeInTl = useRef();
  const planeOutTl = useRef();

  useLayoutEffect(() => {
    tl.current = gsap.timeline({ paused: true });
    tl.current.to(backgroundColors.current, {
      duration: 1,
      colorA: "#63E2FE",
      colorB: "#FFFFFF",
    });
    tl.current.to(backgroundColors.current, {
      duration: 1,
      colorA: "#FF7922",
      colorB: "#FFFFFF",
    });
    tl.current.to(backgroundColors.current, {
      duration: 1,
      colorA: "#1a237e",
      colorB: "#000051",
    });

    planeInTl.current = gsap.timeline({ paused: true });
    planeInTl.current.from(airplane.current.position, {
      duration: 3,
      z: 5,
      y: -2,
    });

    planeOutTl.current = gsap.timeline({ paused: true });
    planeOutTl.current.to(
      airplane.current.position,
      { duration: 10, z: -250, y: 10 },
      0
    );
    planeOutTl.current.to(
      cameraRail.current.position,
      { duration: 8, y: 12 },
      0
    );
    planeOutTl.current.to(airplane.current.position, {
      duration: 1,
      z: -1000,
    });
  }, []);

  useEffect(() => {
    if (play) {
      planeInTl.current.play();
    }
  }, [play]);

  useFrame((_state, delta) => {
    if (window.innerWidth > window.innerHeight) {
      camera.current.fov = 30;
      camera.current.position.z = 5;
    } else {
      camera.current.fov = 80;
      camera.current.position.z = 2;
    }
    camera.current.updateProjectionMatrix();

    if (lastScroll.current <= 0 && scroll.offset > 0) {
      setHasScroll(true);
    }

    if (play && !end && sceneOpacity.current < 1) {
      sceneOpacity.current = THREE.MathUtils.lerp(
        sceneOpacity.current,
        1,
        delta * 0.1
      );
    }

    if (end && sceneOpacity.current > 0) {
      sceneOpacity.current = THREE.MathUtils.lerp(
        sceneOpacity.current,
        0,
        delta
      );
    }

    lineMaterialRef.current.opacity = sceneOpacity.current;

    if (end || isPaused || isRestoringCamera.current) {
      return;
    }

    const scrollOffset = Math.max(0, scroll.offset);

    // Tentukan arah scroll
    scrollDirection.current = scrollOffset > lastScrollOffset.current ? 1 : -1;
    lastScrollOffset.current = scrollOffset;

    let shouldPause = false;
    let closestIslandIndex = -1;
    let minThresholdDiff = Infinity;

    // Cari pulau terdekat berdasarkan scrollOffset dan arah scroll
    textSections.forEach((textSection, index) => {
      const threshold = textSection.scrollThreshold;
      const thresholdDiff = Math.abs(scrollOffset - threshold);
      const isInRange = thresholdDiff < 0.05; // Rentang deteksi yang sama untuk scroll ke atas dan ke bawah

      if (isInRange && thresholdDiff < minThresholdDiff) {
        // Prioritaskan pulau berdasarkan arah scroll
        const isValidForDirection =
          scrollDirection.current === 1
            ? scrollOffset >= threshold // Scroll ke bawah: pilih pulau dengan threshold <= scrollOffset
            : scrollOffset <= threshold; // Scroll ke atas: pilih pulau dengan threshold >= scrollOffset

        if (isValidForDirection) {
          minThresholdDiff = thresholdDiff;
          closestIslandIndex = index;
        }
      }
    });

    if (
      closestIslandIndex !== -1 &&
      currentIslandIndex !== closestIslandIndex
    ) {
      shouldPause = true;
      setIsPaused(true);
      setCurrentIslandIndex(closestIslandIndex);
      const textSection = textSections[closestIslandIndex];
      console.log(
        "Text appeared for:",
        textSection.islandName,
        closestIslandIndex,
        "Scroll offset:",
        scrollOffset,
        "Camera position:",
        camera.current.position
      );

      previousCameraPosition.current.copy(camera.current.position);
      openModal(textSection.islandName, closestIslandIndex);

      const material = islandMaterials.current[closestIslandIndex];
      if (material) {
        gsap.to(material, {
          emissiveIntensity: 0.5,
          duration: 0.5,
        });
      }
    }

    // Nonaktifkan emissiveIntensity untuk pulau lain
    Object.keys(islandMaterials.current).forEach((key) => {
      const idx = parseInt(key);
      if (idx !== currentIslandIndex) {
        const material = islandMaterials.current[idx];
        if (material) {
          gsap.to(material, {
            emissiveIntensity: 0,
            duration: 0.5,
          });
        }
      }
    });

    if (!shouldPause && isPaused) {
      setIsPaused(false);
      closeModal();
      isRestoringCamera.current = true;

      gsap.to(camera.current.position, {
        x: previousCameraPosition.current.x,
        y: previousCameraPosition.current.y,
        z: previousCameraPosition.current.z,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          isRestoringCamera.current = false;
          console.log("Camera restored to:", camera.current.position);
        },
      });
    }

    if (shouldPause || isPaused) {
      return;
    }

    const friction = 1; // Nilai friction untuk scroll lebih mulus
    let lerpedScrollOffset = THREE.MathUtils.lerp(
      lastScroll.current,
      scrollOffset,
      delta * friction
    );
    lerpedScrollOffset = Math.min(lerpedScrollOffset, 1);
    lerpedScrollOffset = Math.max(lerpedScrollOffset, 0);

    lastScroll.current = lerpedScrollOffset;
    tl.current.seek(lerpedScrollOffset * tl.current.duration());

    const curPoint = curve.getPoint(lerpedScrollOffset);
    cameraGroup.current.position.lerp(curPoint, delta * 10);

    const lookAtPoint = curve.getPoint(
      Math.min(lerpedScrollOffset + CURVE_AHEAD_CAMERA, 1)
    );
    const currentLookAt = cameraGroup.current.getWorldDirection(
      new THREE.Vector3()
    );
    const targetLookAt = new THREE.Vector3()
      .subVectors(curPoint, lookAtPoint)
      .normalize();
    const lookAt = currentLookAt.lerp(targetLookAt, delta * 10);
    cameraGroup.current.lookAt(
      cameraGroup.current.position.clone().add(lookAt)
    );

    const tangent = curve.getTangent(lerpedScrollOffset + CURVE_AHEAD_AIRPLANE);
    const nonLerpLookAt = new Group();
    nonLerpLookAt.position.copy(curPoint);
    nonLerpLookAt.lookAt(nonLerpLookAt.position.clone().add(targetLookAt));

    tangent.applyAxisAngle(
      new THREE.Vector3(0, 1, 0),
      -nonLerpLookAt.rotation.y
    );

    let angle = Math.atan2(-tangent.z, tangent.x);
    angle = -Math.PI / 2 + angle;

    let angleDegrees = (angle * 180) / Math.PI;
    angleDegrees *= 2.4;

    if (angleDegrees < 0) {
      angleDegrees = Math.max(angleDegrees, -AIRPLANE_MAX_ANGLE);
    }
    if (angleDegrees > 0) {
      angleDegrees = Math.min(angleDegrees, AIRPLANE_MAX_ANGLE);
    }

    angle = (angleDegrees * Math.PI) / 180;

    const targetAirplaneQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        airplane.current.rotation.x,
        airplane.current.rotation.y,
        angle
      )
    );
    airplane.current.quaternion.slerp(targetAirplaneQuaternion, delta * 2);

    if (
      cameraGroup.current.position.z <
      curvePoints[curvePoints.length - 1].z + 100
    ) {
      setEnd(true);
      planeOutTl.current.play();
    }
  });

  useEffect(() => {
    console.log("isPaused:", isPaused, "modalData:", modalData);
    if (isPaused && modalData === null) {
      console.warn("modalData is null while isPaused is true");
    }
  }, [isPaused, modalData]);

  return useMemo(
    () => (
      <>
        <Environment preset="city" />
        <directionalLight position={[0, 3, 1]} intensity={0.5} />
        <ambientLight intensity={0.2} />
        <group ref={cameraGroup}>
          <Speed />
          <Background backgroundColors={backgroundColors} />
          <group ref={cameraRail}>
            <PerspectiveCamera
              ref={camera}
              position={[0, 0, 5]}
              fov={30}
              makeDefault
            />
          </group>
          <group ref={airplane}>
            <Float floatIntensity={1} speed={1.5} rotationIntensity={0.5}>
              <Airplane
                rotation-y={Math.PI / 2}
                scale={[0.2, 0.2, 0.2]}
                position-y={0.1}
              />
            </Float>
          </group>
        </group>
        {textSections.map((textSection, index) => (
          <TextSection
            {...textSection}
            key={index}
            onMaterialLoaded={(material) => {
              islandMaterials.current[index] = material;
            }}
          />
        ))}
        <group position-y={-2}>
          <mesh castShadow={false} receiveShadow={false}>
            <extrudeGeometry
              args={[
                shape,
                {
                  steps: LINE_NB_POINTS,
                  bevelEnabled: false,
                  extrudePath: curve,
                },
              ]}
            />
            <meshStandardMaterial
              color={"white"}
              ref={lineMaterialRef}
              transparent
              envMapIntensity={2}
            />
          </mesh>
        </group>
        {clouds.map((cloud, index) => (
          <Cloud sceneOpacity={sceneOpacity} {...cloud} key={index} />
        ))}
      </>
    ),
    [clouds, curve, shape, textSections]
  );
};
