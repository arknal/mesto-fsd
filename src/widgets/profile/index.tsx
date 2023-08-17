import "./index.scss";
import { Avatar } from "entities/user";
import { Button } from "shared/ui";

export const Profile = () => {
  return (
    <section className="profile">
      <div
        className="profile__avatar-container"
        onClick={() => console.log("avatar popup opened")}
      >
        <Avatar
          src="https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png"
          alt="Аватар"
          size="large"
        />
        <div className="profile__edit-avatar" />
      </div>
      <div className="flex-container flex-container_direction_column profile__info">
        <div className="flex-container">
          <h1 className="profile__name">Test</h1>
          <button
            className="profile__edit-button"
            type="button"
            onClick={() => console.log("edit profile popup opened")}
          />
        </div>
        <p className="profile__job">Test about</p>
      </div>
      <Button theme="light" type="button" className="profile__subscribe-btn">
        Подписаться
      </Button>
      <div className="profile__action-container">
        <div className="profile__user-action">
          <span className="profile__user-numbers">0</span> Подписчиков{" "}
        </div>
        <div className="profile__user-action">
          <span className="profile__user-numbers">0</span> Мест
        </div>
      </div>
    </section>
  );
};
