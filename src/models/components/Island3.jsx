import { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

export const Island3 = forwardRef(({ onClick, ...props }, ref) => {
  const { nodes, materials } = useGLTF("/models/ocean.glb");

  const handleClick = (e) => {
    console.log("Island1 clicked");
    if (onClick) onClick(e);
  };

  return (
    <group ref={ref} {...props} dispose={null} onClick={handleClick}>
      <group name="Scene">
        <mesh
          name="Fish3"
          castShadow
          receiveShadow
          geometry={nodes.Fish3.geometry}
          material={materials["Fish.004"]}
          position={[-11.733, -3.205, 1.636]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={2.61}
        />
        <group
          name="moon"
          position={[-9.354, 9.238, -103.62]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.012}
        >
          <group name="MOON_AND_CLOUDSobjcleanermaterialmergergles">
            <mesh
              name="Object_2001"
              castShadow
              receiveShadow
              geometry={nodes.Object_2001.geometry}
              material={materials.MOON}
              position={[0, -8451.788, 91.421]}
              scale={1.276}
            />
          </group>
        </group>
        <group
          name="island"
          position={[-7.076, 0.513, -46.458]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={0.002}
        >
          <group
            name="3dec46590dec42bf849611d17b1c70f7fbx010"
            position={[-0.002, 0, 0]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="RootNode010" position={[-0.002, 0, 0]}>
              <group
                name="Cube011"
                position={[-0.002, 0, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <group
                  name="island_malem"
                  position={[-221.338, -21.507, -2.917]}
                  rotation={[0, -0.077, 0.139]}
                  scale={0.749}
                >
                  <mesh
                    name="Cube001_Material001_0005"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_Material001_0005.geometry}
                    material={materials["Material.018"]}
                  />
                  <mesh
                    name="Cube001_Material001_0005_1"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_Material001_0005_1.geometry}
                    material={materials["treasure_mat.004"]}
                  />
                  <mesh
                    name="Cube001_Material001_0005_2"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_Material001_0005_2.geometry}
                    material={materials["palm_mat.004"]}
                  />
                  <mesh
                    name="Cube001_Material001_0005_3"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_Material001_0005_3.geometry}
                    material={materials["coconut_mat.004"]}
                  />
                  <mesh
                    name="Cube001_Material001_0005_4"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_Material001_0005_4.geometry}
                    material={materials["leaf_mat.004"]}
                  />
                  <mesh
                    name="Cube001_Material001_0005_5"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_Material001_0005_5.geometry}
                    material={materials["rock_mat.004"]}
                  />
                  <mesh
                    name="Cube001_Material001_0005_6"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_Material001_0005_6.geometry}
                    material={materials["M_UV.002"]}
                  />
                  <mesh
                    name="Cube001_Material001_0005_7"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_Material001_0005_7.geometry}
                    material={materials["Material.017"]}
                  />
                  <mesh
                    name="Cube001_Material001_0005_8"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_Material001_0005_8.geometry}
                    material={materials["Material.019"]}
                  />
                  <mesh
                    name="Cube001_Material001_0005_9"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube001_Material001_0005_9.geometry}
                    material={materials["Material.020"]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
});

useGLTF.preload("/models/ocean.glb");