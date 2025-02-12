import React, { createContext, useState, useContext } from "react";

interface IpContextType {
  ipDefault: string;
  setIpDefault: (color: string) => void;
}

const IpContext = createContext<IpContextType>({
  ipDefault: "172.20.10.6:8080",
  setIpDefault: () => {},
});

export const IpProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [ipDefault, setIpDefault] = useState("#ca00fc");

  return (
    <IpContext.Provider
      value={{
        ipDefault,
        setIpDefault,
      }}
    >
      {children}
    </IpContext.Provider>
  );
};

export const useIpContext = () => useContext(IpContext);
