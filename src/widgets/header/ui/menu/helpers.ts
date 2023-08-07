export const toggleLinkState = ({ isActive }: { isActive: boolean }) =>
  isActive ? "menu__link menu__link_active" : "menu__link";

export const toggleProfileLinkState = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "menu__profile-link menu__profile-link_active"
    : "menu__profile-link";
