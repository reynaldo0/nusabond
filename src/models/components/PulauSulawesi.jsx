import { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

export const PulauSulawesi = forwardRef(({ onClick, ...props }, ref) => {
  const { nodes, materials } = useGLTF("/models/sulawesi.glb");

  const handleClick = (e) => {
    console.log("Island1 clicked");
    if (onClick) onClick(e);
  };

  return (
    <group ref={ref} {...props} dispose={null} onClick={handleClick}>
      <group scale={0.01}>
        <group scale={5.6}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Small_Island_M_Island_1_0001_1.geometry}
            material={materials.M_Island_1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Small_Island_M_Island_1_0001_2.geometry}
            material={materials['M_Island_2.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Small_Island_M_Island_1_0001_3.geometry}
            material={materials['M_Island_2.005']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Small_Island_M_Island_1_0001_4.geometry}
            material={materials['M_Flowers.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Small_Island_M_Island_1_0001_5.geometry}
            material={materials.M_Flowers}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Small_Island_M_Island_1_0001_6.geometry}
            material={materials['Material.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Small_Island_M_Island_1_0001_7.geometry}
            material={materials['Icosphere.010__0.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Small_Island_M_Island_1_0001_8.geometry}
            material={materials['Icosphere.010__0']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Small_Island_M_Island_1_0001_9.geometry}
            material={materials['Icosphere.010__0.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Small_Island_M_Island_1_0001_10.geometry}
            material={materials['Icosphere.010__0.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Small_Island_M_Island_1_0001_11.geometry}
            material={materials['Material.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Small_Island_M_Island_1_0001_12.geometry}
            material={materials['M_Mushrooms.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Small_Island_M_Island_1_0001_13.geometry}
            material={materials.M_Mushrooms}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Small_Island_M_Island_1_0001_14.geometry}
            material={materials['M_Island_2.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Small_Island_M_Island_1_0001_15.geometry}
            material={materials.M_Island_2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Small_Island_M_Island_1_0001_16.geometry}
            material={materials['M_Island_1.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Small_Island_M_Island_1_0001_17.geometry}
            material={materials['Material.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Small_Island_M_Island_1_0001_18.geometry}
            material={materials.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Small_Island_M_Island_1_0001_19.geometry}
            material={materials['Material.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Small_Island_M_Island_1_0001_20.geometry}
            material={materials.atap_2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Small_Island_M_Island_1_0001_21.geometry}
            material={materials['papan__rumah_2_no_1.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Small_Island_M_Island_1_0001_22.geometry}
            material={materials.papan__rumah_2_no_1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Small_Island_M_Island_1_0001_23.geometry}
            material={materials['toraja_batu.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Small_Island_M_Island_1_0001_24.geometry}
            material={materials.Material_001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Small_Island_M_Island_1_0001_25.geometry}
            material={materials['Material.006']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Small_Island_M_Island_1_0001_26.geometry}
            material={materials['circle.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Small_Island_M_Island_1_0001_27.geometry}
            material={materials['badan_kayu.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Small_Island_M_Island_1_0001_28.geometry}
            material={materials['depan_belakang_atap_hijau.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Small_Island_M_Island_1_0001_29.geometry}
            material={materials['kiri_kanan.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Small_Island_M_Island_1_0001_30.geometry}
            material={materials['badan_kayu_cat.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Small_Island_M_Island_1_0001_31.geometry}
            material={materials['atap_rumah.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Small_Island_M_Island_1_0001_32.geometry}
            material={materials['atap_rumah_kayu.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Small_Island_M_Island_1_0001_33.geometry}
            material={materials['Material_0.002']}
          />
        </group>
      </group>
    </group>
  );
});

useGLTF.preload("/models/sulawesi.glb");
