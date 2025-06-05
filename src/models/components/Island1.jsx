import { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

export const Island1 = forwardRef(({ onClick, ...props }, ref) => {
  const { nodes, materials } = useGLTF("/models/batik.glb");

  const handleClick = (e) => {
    console.log("Island1 clicked");
    if (onClick) onClick(e);
  };

  return (
    <group ref={ref} {...props} dispose={null} onClick={handleClick}>
      <group
        position={[-8.392, 1.736, -3.594]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.22}
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.TreeRoots_M_Island_2_0.geometry}
            material={materials["M_Island_2.001"]}
            position={[0, 179.247, 0]}
            scale={1.453}
          />
        </group>
      </group>
      <group
        position={[5.824, -1.399, -8.92]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.798}
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[-134.837, 533.942, -1714.291]} scale={107.246}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Stylized__Plant_Pack_Mesh_M_Flowers_0002.geometry}
              material={materials["M_Flowers.001"]}
              position={[-37.047, 2.998, 21.39]}
              rotation={[-Math.PI, 1.359, -Math.PI]}
              scale={1.52}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bridge_Island_M_Island_1_0001.geometry}
            material={materials["M_Island_1.001"]}
            position={[-1602.945, 43.676, -168.955]}
            rotation={[-Math.PI, 1.359, -Math.PI]}
            scale={1.52}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder011_M_Mushrooms_0001.geometry}
            material={materials["M_Mushrooms.001"]}
            position={[-1602.945, 43.676, -168.955]}
            rotation={[-Math.PI, 1.359, -Math.PI]}
            scale={1.52}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder010_M_Mushrooms_0001.geometry}
            material={materials["M_Mushrooms.001"]}
            position={[-1602.945, 43.676, -168.955]}
            rotation={[-Math.PI, 1.359, -Math.PI]}
            scale={1.52}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bush_2_M_Island_2_0001.geometry}
            material={materials["M_Island_2.002"]}
            position={[-1602.945, 43.676, -168.955]}
            rotation={[-Math.PI, 1.359, -Math.PI]}
            scale={1.52}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Bush_3_M_Island_2_0001.geometry}
            material={materials["M_Island_2.002"]}
            position={[-1602.945, 43.676, -168.955]}
            rotation={[-Math.PI, 1.359, -Math.PI]}
            scale={1.52}
          />
        </group>
      </group>
      <group
        position={[-8.119, 2.988, 0]}
        rotation={[-Math.PI / 2, 0, 0.57]}
        scale={0.117}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.floor}
          position={[0.262, 6.062, 0.334]}
          scale={0.816}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.megamendung}
          position={[0.262, 6.062, 0.334]}
          scale={0.816}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.texture_kayu_jati}
          position={[0.262, 6.062, 0.334]}
          scale={0.816}
        />
      </group>
      <group
        position={[3.596, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.008}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[403.711, -250.549, -318.16]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={-111.271}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Icosphere022__0.geometry}
              material={materials["Icosphere.010__0"]}
              position={[23.276, 6.716, 0.548]}
              rotation={[0, 0, -0.378]}
              scale={0.69}
            />
          </group>
          <group
            position={[-2133.024, -254.055, 373.413]}
            rotation={[-Math.PI / 2, 0, -0.676]}
            scale={-76.771}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Icosphere023__0.geometry}
              material={materials["Icosphere.010__0"]}
              position={[-0.149, -0.225, -0.582]}
              rotation={[0, 0, 0.298]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere015__0.geometry}
            material={materials["Icosphere.010__0"]}
            position={[-1211.541, -126.634, -921.221]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={-143.283}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere016__0.geometry}
            material={materials["Icosphere.010__0"]}
            position={[-1227.003, -99.717, -1112.756]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={109.406}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere017__0.geometry}
            material={materials["Icosphere.010__0"]}
            position={[-1237.263, 33.004, -877.057]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={-102.335}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere018__0.geometry}
            material={materials["Icosphere.010__0"]}
            position={[-1174.499, -96.907, -750.917]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={-102.335}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere019__0.geometry}
            material={materials["Icosphere.010__0"]}
            position={[-1381.738, -129.996, -915.103]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[-122.308, -122.307, -122.307]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere020__0.geometry}
            material={materials["Icosphere.010__0"]}
            position={[-1071.561, -140.588, -928.083]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={-126.551}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere021__0.geometry}
            material={materials["Icosphere.010__0"]}
            position={[-2172.562, -304.286, 259.83]}
            rotation={[-Math.PI / 2, 0, -0.378]}
            scale={-114.294}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere024__0.geometry}
            material={materials["Icosphere.010__0"]}
            position={[-2104.504, -312.183, 162.234]}
            rotation={[-Math.PI / 2, 0, -0.378]}
            scale={-76.771}
          />
        </group>
      </group>
      <group
        position={[10.083, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.003}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-4605.579, 1841.719, -3068.862]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[145.335, 145.335, 337.783]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.balon_udara_panas002_atap_2_0.geometry}
              material={materials.atap_2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.balon_udara_panas002_papan__rumah_2_no_1_0.geometry
              }
              material={materials.papan__rumah_2_no_1}
            />
          </group>
          <group
            position={[-4605.579, 1841.719, -3068.862]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[145.335, 145.335, 337.783]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.balon_udara_panas004_atap_2_0.geometry}
              material={materials.atap_2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.balon_udara_panas004_Material002_0.geometry}
              material={materials["Material.003"]}
            />
          </group>
          <group
            position={[-3444.221, -1271.869, -2927.064]}
            rotation={[-Math.PI / 2, 0, 1.981]}
            scale={192.908}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Icosphere010__0.geometry}
              material={materials["Icosphere.010__0.001"]}
              position={[0.231, 0.531, 0]}
            />
          </group>
          <group
            position={[-3377.21, -1139.352, -2733.777]}
            rotation={[-Math.PI / 2, 0, 1.981]}
            scale={132.862}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Icosphere011__0.geometry}
              material={materials["Icosphere.010__0.001"]}
              position={[0.335, 0.771, 0]}
            />
          </group>
          <group
            position={[-3460.529, -1057.694, -2965.38]}
            rotation={[-Math.PI / 2, 0, 1.981]}
            scale={153.727}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Icosphere012__0.geometry}
              material={materials["Icosphere.010__0.001"]}
              position={[0.272, 0.626, 0]}
            />
          </group>
          <group
            position={[-3632.574, -1271.868, -2822.548]}
            rotation={[-Math.PI / 2, 0, 1.981]}
            scale={129.396}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Icosphere013__0.geometry}
              material={materials["Icosphere.010__0.001"]}
              position={[0.344, 0.791, 0]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere014__0.geometry}
            material={materials["Icosphere.010__0.001"]}
            position={[-3522.995, -1287.988, -3140.365]}
            rotation={[-Math.PI / 2, 0, 1.981]}
            scale={136.527}
          />
        </group>
      </group>
      <group
        position={[12.186, 0, 0.735]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.004}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-3377.209, -1139.352, -2733.776]}
            rotation={[-Math.PI / 2, 0, 1.981]}
            scale={132.862}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Icosphere011__0001.geometry}
              material={materials["Icosphere.010__0.002"]}
              position={[0.335, 0.771, 0]}
            />
          </group>
        </group>
      </group>
      <group
        position={[-12.967, 5.776, -7.548]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.005}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere028__0.geometry}
            material={materials["Icosphere.010__0.003"]}
            position={[-878.952, 156.343, 1086.894]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={-161.556}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere029__0.geometry}
            material={materials["Icosphere.010__0.003"]}
            position={[-649.378, 146.18, 1016.394]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={-108.517}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere030__0.geometry}
            material={materials["Icosphere.010__0.003"]}
            position={[-768.962, 290.48, 953.043]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={-108.517}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere031__0.geometry}
            material={materials["Icosphere.010__0.003"]}
            position={[-1042.677, 145.18, 1048.429]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={-108.517}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere032__0.geometry}
            material={materials["Icosphere.010__0.003"]}
            position={[-890.624, 271.168, 1271.142]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={-108.517}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Icosphere033__0.geometry}
            material={materials["Icosphere.010__0.003"]}
            position={[-821.666, 436.485, 1369.323]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={-72.572}
          />
        </group>
      </group>
      <group
        position={[-38.717, 9.219, 7.384]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[1743.921, -84.615, -1216.909]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[43.026, 43.026, 100]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.balon_udara_panas005_a_0.geometry}
              material={materials.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.balon_udara_panas005_Material002_0.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.balon_udara_panas003_papan__rumah_2_no_1_0.geometry}
            material={materials["papan__rumah_2_no_1.001"]}
            position={[1743.921, -84.615, -1216.909]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[43.026, 43.026, 100]}
          />
        </group>
      </group>
      <group
        position={[-3.68, 1.064, -7.177]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.012}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-220.23, 174.825, 214.918]}
            rotation={[-1.288, 0, -Math.PI]}
            scale={58.159}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Icosphere_Material007_0.geometry}
              material={materials["Material.007"]}
              position={[-0.646, 0, 0]}
              scale={0.659}
            />
          </group>
        </group>
      </group>
      <group
        position={[-10.28, -6.687, 1.418]}
        rotation={[-1.307, 0, 0]}
        scale={0.013}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[141.133, 421.326, -262.666]}
            rotation={[-Math.PI / 2, 0, 1.604]}
            scale={39.52}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Icosphere005_Material007_0.geometry}
              material={materials["Material.002"]}
              position={[0.527, 1.802, -1.559]}
              rotation={[-0.012, -0.34, -0.002]}
              scale={1.212}
            />
          </group>
        </group>
      </group>
      <group
        position={[-8.926, 3.217, -5.538]}
        rotation={[-Math.PI / 2, 0, -0.961]}
        scale={0.81}
      >
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tree_Bark_M_Island_2_0.geometry}
            material={materials["M_Island_2.005"]}
            position={[121.085, -32.708, 32.179]}
            scale={1.467}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Tree_Leafs_M_Island_2_0.geometry}
            material={materials["M_Island_2.005"]}
            position={[121.085, -32.708, 32.179]}
            scale={1.467}
          />
        </group>
      </group>
      <group scale={0.01}>
        <group position={[-134.837, 533.942, -1714.291]} scale={107.246}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Stylized__Plant_Pack_Mesh_M_Flowers_0001.geometry}
            material={materials.M_Flowers}
            position={[-8.553, 4.349, -10.166]}
            scale={1.52}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bridge_Island_M_Island_1_0.geometry}
          material={materials.M_Island_1}
          position={[-847.06, 188.584, -198.072]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Small_Island_M_Island_1_0001.geometry}
          material={materials.M_Island_1}
          position={[1076.74, 524.311, -778.327]}
          scale={5.6}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010_M_Mushrooms_0.geometry}
          material={materials.M_Mushrooms}
          position={[-847.06, 188.584, -198.072]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011_M_Mushrooms_0.geometry}
          material={materials.M_Mushrooms}
          position={[-847.06, 188.584, -198.072]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bush_2_M_Island_2_0.geometry}
          material={materials.M_Island_2}
          position={[-847.06, 188.584, -198.072]}
          scale={1.52}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bush_3_M_Island_2_0.geometry}
          material={materials.M_Island_2}
          position={[-847.06, 188.584, -198.072]}
          scale={1.52}
        />
      </group>
    </group>
  );
});

useGLTF.preload("/models/batik.glb");
