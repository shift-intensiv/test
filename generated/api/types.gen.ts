// This file is auto-generated by @hey-api/openapi-ts

export type CreateOtpDto = {
  phone: string;
};

export type OtpResponse = {
  /**
   * Статус запроса
   */
  success: boolean;
  /**
   * Причина ошибки
   */
  reason?: string | null;
  /**
   * Время запроса повторного отп кода в мс
   */
  retryDelay: number;
};

export type SignInDto = {
  /**
   * Номер телефона
   */
  phone: string;
  /**
   * Отп код
   */
  code: number;
};

export type User = {
  /**
   * Номер телефона
   */
  phone: string;
  /**
   * Имя
   */
  firstname?: string;
  /**
   * Отчество
   */
  middlename?: string;
  /**
   * Фамилия
   */
  lastname?: string;
  /**
   * Почта
   */
  email?: string;
  /**
   * Город
   */
  city?: string;
};

export type SignInResponse = {
  /**
   * Статус запроса
   */
  success: boolean;
  /**
   * Причина ошибки
   */
  reason?: string | null;
  /**
   * Пользователь
   */
  user: User;
  /**
   * Пользовательский токен
   */
  token: string;
};

export type UpdateProfileProfileDto = {
  /**
   * Имя
   */
  firstname: string | null;
  /**
   * Отчество
   */
  middlename: string | null;
  /**
   * Фамилия
   */
  lastname: string | null;
  /**
   * Почта
   */
  email: string | null;
  /**
   * Город
   */
  city: string | null;
};

export type UpdateProfileDto = {
  /**
   * Данные пользователя
   */
  profile: UpdateProfileProfileDto;
  /**
   * Номер телефона
   */
  phone: string;
};

export type UpdateProfileResponse = {
  /**
   * Статус запроса
   */
  success: boolean;
  /**
   * Причина ошибки
   */
  reason?: string | null;
  /**
   * Пользователь
   */
  user: User;
};

export type SessionResponse = {
  /**
   * Статус запроса
   */
  success: boolean;
  /**
   * Причина ошибки
   */
  reason?: string | null;
  /**
   * Пользователь
   */
  user: User;
};