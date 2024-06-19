# Документация разработчика

## Шаблоны
1. [Страницы](./docs/ru/pattern/component.md)
2. [Методы](./docs/ru/pattern/method.md)
3. [Сценарии](./docs/ru/pattern/script.md)

## Структра приложения
<table>
  <thead>
    <tr>
      <td>Уровень</td>
      <td>Назначение</td>
      <td>Технология</td>
      <td>Методы</td>
    </tr>
    <tbody>
      <tr>
<!-- Уровень -->
        <td>Клиент</td>
<!-- Назначение -->
        <td>
          <ul>
            <li>Отображать информацию на пользовательском ПК</li>
            <li>Давать возможность пользователю взаимодействовать с этой информацией</li>
          </ul>
        </td>
<!-- Технологии -->
        <td>React</td>
<!-- Методы -->
        <td>
          <ul>
            <li>Получить данные о курсе валют</li>
          </ul>
        </td>
      </tr>
      <tr>
<!-- Уровень -->
        <td>Стор</td>
<!-- Назначение -->
        <td>
          <ul>
            <li>Оптимизирует работу клиента</li>
          </ul>
        </td>
<!-- Технологии -->
        <td>Redux</td>
<!-- Методы -->
        <td>
          <ul>
            <li>Получить данные пользователя</li>
          </ul>
        </td>
      </tr>
      <tr>
<!-- Уровень -->
        <td>Сервер</td>
<!-- Назначение -->
        <td>
          <ul>
            <li>Обрабатывает запросы клиента</li>
            <li>Обращается к базе данных</li>
          </ul>
        </td>
<!-- Технологии -->
        <td>Node.js</td>
<!-- Методы -->
        <td>
          <ul>
            <li>Проверка пользователя</li>
            <li>Получить данные пользователя</li>
            <li>Изменить данные пользователя</li>
          </ul>
        </td>
      </tr>
      <tr>
<!-- Уровень -->
        <td>База данных</td>
<!-- Назначение -->
        <td>
          <ul>
            <li>Хранит данные по всем пользователям</li>
          </ul>
        </td>
<!-- Технологии -->
        <td>SQLite</td>
<!-- Методы -->
        <td></td>
      </tr>
    </tbody>
  </thead>
</table>

## Цель приложения
- Приложение преднозначено для ведения домашнего бюджета, позволяет:
  - Создавать свою учетную запись
  - Создавать пользовательские счета
  - Создавать пользовательские категории
  - Создавать создавать транзакции между счетами
  - Видеть курс валют

## Архитектурная схема
1. Клиент
  - Страницы
    - <a href="./docs/ru/pages/Auth.md">Авторизация</a>
    - Главная страница
    - Страница пользовательских категорий
    - Страница пользовательской истории транзакции
    - Страница транзакции
    - Карточка счета
    - Карточка категории
    - Карточка пользоавтеля

2. Сервер
  - Методы
    - Создать пользователя
    - Авторизация пользователя
    - Изменение пользовательских данных
    - Получить данные пользователя
    - Создать ноавый счет пользователя
    - Удалить счет пользователя
    - Перевод между счетами пользователя
    - Редактирование перевода пользователя
    - Создать новую категорию пользователя
    - Фильтрация и пагинация истории пользовательских транзакций

3. База данных
  - Таблицы
    - Пользователи
    - Счета
    - Категории
    - История
    - Валюты