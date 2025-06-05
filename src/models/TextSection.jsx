import { Text } from "@react-three/drei";
import { useEffect, useRef, forwardRef, useMemo } from "react";
import * as THREE from "three";
import { Island1 } from "./components/Island1";
import { Island4 } from "./components/Island4";
import { Island2 } from "./components/Island2";
import { Island3 } from "./components/Island3";

export const TextSection = forwardRef(
  (
    {
      title,
      subtitle,
      modelType = "island1",
      modelProps = {},
      onMaterialLoaded,
      ...props
    },
    ref
  ) => {
    const islandRef = useRef();

    useEffect(() => {
      if (islandRef.current) {
        islandRef.current.traverse((child) => {
          if (child.isMesh && child.material) {
            const material = child.material;
            material.emissive = new THREE.Color(0xaaaaaa);
            material.emissiveIntensity = 0;
            if (material.map) {
              material.map.encoding = THREE.sRGBEncoding;
              material.map.flipY = false;
              material.map.anisotropy = 16;
              material.map.needsUpdate = true;
            }
            material.needsUpdate = true;
            if (onMaterialLoaded) onMaterialLoaded(material);
          }
        });
      }
    }, [modelType, JSON.stringify(modelProps), onMaterialLoaded]);

    const islandModel = useMemo(() => {
      switch (modelType) {
        case "island1":
          return <Island1 {...modelProps} ref={islandRef} />;
        case "island2":
          return <Island2 {...modelProps} ref={islandRef} />;
        case "island3":
          return <Island3 {...modelProps} ref={islandRef} />;
        case "island4":
          return <Island4 {...modelProps} ref={islandRef} />;
        default:
          return <Island1 {...modelProps} ref={islandRef} />;
      }
    }, [modelType, modelProps]);

    return (
      <group {...props} ref={ref}>
        {title && (
          <Text
            color="white"
            anchorX="left"
            anchorY="bottom"
            fontSize={0.52}
            maxWidth={2.5}
            lineHeight={1}
            font="/fonts/DMSerifDisplay-Regular.ttf"
          >
            {title}
            <meshStandardMaterial color="white" />
          </Text>
        )}
        {subtitle && (
          <Text
            color="white"
            anchorX="left"
            anchorY="top"
            fontSize={0.2}
            maxWidth={2.5}
            font="/fonts/Inter-Regular.ttf"
          >
            {subtitle}
            <meshStandardMaterial color="white" />
          </Text>
        )}
        {islandModel}
      </group>
    );
  }
);
