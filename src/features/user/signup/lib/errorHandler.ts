export function signupErrorHandler(statusCode: number) {
  switch (statusCode) {
    case 409: {
      return "Пользователь с такой эл. почтой уже зарегистрирован";
    }
    default:
      return "Произошла ошибка. Попробуйте еще раз";
  }
}
