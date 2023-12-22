import { StyleSheet } from "react-native";

interface Styles {
  shadow: {
    shadowColor: string;
    shadowOffset: { width: number; height: number };
    shadowOpacity: number;
    shadowRadius: number;
    elevation: number;
  };
  xxlBoldText: {
    color: string;
    fontSize: number;
    fontFamily: string;
  };
  smText: {
    color: string;
    fontSize: number;
    fontFamily: string;
  };
  smBoldText: {
    color: string;
    fontSize: number;
    fontFamily: string;
  };
  
  mdText: {
    color: string;
    fontSize: number;
    fontFamily: string;
  };
  mdBoldText: {
    color: string;
    fontSize: number;
    fontFamily: string;
  };
  lgText: {
    color: string;
    fontSize: number;
    fontFamily: string;
  };
  lgBoldText: {
    color: string;
    fontSize: number;
    fontFamily: string;
  };
  xlText: {
    color: string;
    fontSize: number;
    fontFamily: string;
  };
  xlBoldText: {
    color: string;
    fontSize: number;
    fontFamily: string;
  };
  mdSemiBold: {
    color: string;
    fontSize: number;
    fontFamily: string;
    lineHeight: number;
  };
}

export const Styles: Styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7D848D",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 6,
  },
  xxlBoldText: {
    color: "#1B1E28",
    fontSize: 40,
    fontFamily: "Poppins_700Bold",
  },
  smText: {
    color: "#1B1E28",
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
  },
  smBoldText: {
    color: "#1B1E28",
    fontSize: 12,
    fontFamily: "Poppins_700Bold",
  },
  mdText: {
    color: "#1B1E28",
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
  },
  mdBoldText: {
    color: "#1B1E28",
    fontSize: 14,
    fontFamily: "Poppins_700Bold",
  },
  lgText: {
    color: "#1B1E28",
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
  },
  lgBoldText: {
    color: "#1B1E28",
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
  },
  xlText: {
    color: "#1B1E28",
    fontSize: 18,
    fontFamily: "Poppins_400Regular",
  },
  xlBoldText: {
    color: "#8C8C8C",
    fontSize: 18,
    fontFamily: "Poppins_700Bold",
  },
  mdSemiBold: {
    color: "#1B1E28",
    fontSize: 14,
    fontFamily: "Poppins_600SemiBold",
    lineHeight: 22,
  },
});
