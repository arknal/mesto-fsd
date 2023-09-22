import React from "react";
import { LogoutButton } from "features";
import "./index.scss";
import { selectCurrentUser } from "entities/user";
import { useAppSelector } from "shared";

export const ProfilePage = () => {
  const user = useAppSelector(selectCurrentUser);
  console.log(user);
  return (
    <main className="profile-page page__section">
      <div className="profile-page__wrapper">
        <h1 className="profile-page__greeting">{user}</h1>
        <div className="profile-page__info-block">
          <div className="profile-page__info">
            <h2 className="profile-page__info-header">Имя</h2>
            <p className="profile-page__info-value">Виталий</p>
          </div>
          <div className="profile-page__info">
            <h2 className="profile-page__info-header">E-mail</h2>
            <p className="profile-page__info-value">pochta@yandex.ru</p>
          </div>
        </div>
        <div className="profile-page__control-block">
          <button className="profile-page__edit-btn">Редактировать</button>
          <LogoutButton className="profile-page__logout-btn" />
        </div>
      </div>
    </main>
  );
};
