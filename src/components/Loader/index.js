import {
  ThreeDLoader,
  BoltLoader,
  BoxesLoader,
  CircleLoader,
  ScatterBoxLoader,
  XlviLoader,
} from "react-awesome-loaders";

export const ThreeDLoaderComponent = () => {
  return (
    <>
      <ThreeDLoader
        colorRing1={"#DC2626"}
        colorRing2={"#1e1e1e"}
        desktopSize={"100px"}
        mobileSize={"64px"}
      />
    </>
  );
};

export const BoltLoaderComponent = () => {
  return (
    <>
      <BoltLoader
        className={"loaderbolt"}
        boltColor={"#6366F1"}
        backgroundBlurColor={"#E0E7FF"}
      />
    </>
  );
};

export const BoxesLoaderComponent = () => {
  return (
    <>
      <BoxesLoader
        boxColor={"#6366F1"}
        style={{ marginBottom: "20px" }}
        desktopSize={"128px"}
        mobileSize={"80px"}
      />
    </>
  );
};

export const CircleLoaderComponent = () => {
  return (
    <>
      <CircleLoader
        meshColor={"#6366F1"}
        lightColor={"#E0E7FF"}
        duration={1.5}
        desktopSize={"90px"}
        mobileSize={"64px"}
      />
    </>
  );
};

export const ScatterBoxLoaderComponent = () => {
  return (
    <>
      <ScatterBoxLoader primaryColor={"#6366F1"} background={"transparent"} />
    </>
  );
};

export const XlviLoaderComponent = () => {
  return (
    <>
      <XlviLoader
        boxColors={["#EF4444", "#F59E0B", "#6366F1"]}
        desktopSize={"128px"}
        mobileSize={"100px"}
      />
    </>
  );
};
