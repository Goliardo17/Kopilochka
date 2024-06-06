# Главная страница

## Компоненты на странице
> 1. Информация по выбранному счету пользователя
   - [x] Средняя карточка счета
   - [x] Список счетов пользователя
   - [x] Блок с кнопками "Пополнить" и "Перевести"
   - [ ] Блок с иконками часто используемых категорий

> 2. Информация о счетах пользователя
   - [x] Свертываемый компонент "Ваши счета"
   - [x] Список счетов пользователя
   - [x] Кнопка "Создать новый счет"

> 3. Информация по актуальному курсу валют
   - [x] Свертываемый компонент "Обмен валют"
   - [x] Список доступных для обмена валют

## Данные для построения
> Компоненты для которых требуются данные
   > - [ ] Выбранный счет
   > - [ ] Список счетов
   > - [ ] Часто используемые категории
   > - [ ] Список доступных валют

## Список пользовательских кейсов
> Выбранный счет пользователя
   - [ ] при загрузке страницы должен отображаться счет по умолчанию
   - [ ] при нажатии на информацию по выбранному счету пользователь переходит на [страницу счета]
   - [ ] при нажатии на другой счет из списка, отображаемая информация в компоненте выбранного счета меняется
   - [ ] при нажатии на кнопку "+", пользователь переходит на страницу [создания нового счета]
   - [ ] при нажатии на кнопку "перевести" пользователь переходит на страницу [перевода средств]
   - [ ] при нажатии на кнопку "Пополнить" пользователь переходит на страницу [перевода средств]
   - [ ] при нажатии на одну из популярных категорий расходов пользователь переходит на страницу [перевода средств]

> Информация о счетах пользователя
   - [ ] при загрузке страницы компонент список счетов пользователя должен быть виден
   - [ ] при нажатии на шапку компонента страницы, список счетов пользователя скрывается
   - [ ] при нажатии на счет пользователь переходит на [страницу счета]
   - [ ] при нажатии на кнопку добавить пользователь переходит на страницу [создания нового счета]

> Информация по актуальному курсу валют
   - [ ] при загрузке страницы компонент список валют должен быть виден
   - [ ] при нажатии на шапку компонента страницы, список валют скрывается
   - [ ] при нажатии на валюту, если у пользователя нет счета с выбранной валютой, то он переходит на страницу [создания нового счета]
   - [ ] при нажатии на валюту, если у пользователя есть счет с выбранной валютой, то он переходит на страницу [перевода средств]