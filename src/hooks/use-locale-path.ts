import { useTranslation } from "react-i18next";

export function useLocalePath() {
  const { i18n } = useTranslation();
  return (path: string) => {
    if (path.startsWith("#") || path.startsWith("http") || path.startsWith("mailto:")) {
      return path;
    }
    return `/${i18n.language}${path.startsWith("/") ? path : `/${path}`}`;
  };
}
