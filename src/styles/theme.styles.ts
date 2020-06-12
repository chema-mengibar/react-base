interface Object {
  [key: string]: any | string | Object;
}

interface Theme {
  [key: string]: Object;
}

export const theme = {
  colors: {
    base: {
      d2: "#565656",
      d1: "#757575",
      _: "#C4C4C4",
      l1: "#E5E5E5",
      l2: "#FFFFFF",
    },
    text: {
      _: "#000000",
      contrast: "#ffffff",
    },
    accent: {
      default: {
        d1: "#DB4E6F",
        _: "#FF567A",
        l1: "#FF6B8A",
      },
      sky: {
        d1: "#6888BB",
        _: "#9EBEF1",
        l1: "#C7D9F7",
      },
    },
    extra: {
      success: {
        _: "#64DC70",
      },
    },
  },
} as Theme;
