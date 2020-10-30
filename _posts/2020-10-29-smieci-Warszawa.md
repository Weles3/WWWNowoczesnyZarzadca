---
layout: post
title: Nowy sposób obciążeń za śmieci w Warszawie od 2020-12-01
description: Od grudnia śmieci w Warszawie będą naliczane na podstawie zużytej wody
icon: /svg/w3nt.svg
tags: [w3, tmd]
readTime: 10
---

# Podstawa prawna zmiany

Zmiany zostały wprowadzone na sesji Rady Warszawy w dniu 2020-10-15.
Szczegóły wraz z treścią uchwał można poznać [na stronie BIP m. st. Warszawy](https://warszawa19115.pl/-/nowe-stawki-za-odpady).

# Zakres zmian

Uchwały wprowadzają kwotę opłaty na śmieci równej średniomiesięcznemu zużyciu wody z
licznika głównego ([bez wody ogrodowej](https://www.mpwik.com.pl/view/rozliczanie-odpadow-komunalnych-na-podstawie-ilosci-zuzytej-wody) nieruchomości z ostatniego 6-miesięcznego okresu rozliczeniowego pomnożonej przez stawkę 12,73.

Wysokość opłat nie będzie teraz zależała od faktu czy nieruchomość jest zamieszkała
w całości czy tylko w części.

W przypadku nieruchomości, gdzie nie ma licznika głównego lub wyliczenie zużycia  
nie jest możliwe, przyjmuje się ryczałt 4 m3/os.

**Uchwały dotyczą sposobu rozliczania się nieruchomości z miastem, nie
wskazują natomiast sposobu rozliczania się nieruchomości z właścicielami lokali**

Dużo informacji można uzyskać na [stronie m. st. Warszawy dot. gospodarki odpadami](https://warszawa19115.pl/wszystko-o-odpadach#).

# Sposoby rozliczenia się z właścicielami lokali

Sposób rozliczenia tej opłaty na poszczególnych właścicieli lokali zależy
od decyzji zarządu nieruchomości. Poniżej proponujemy 2 schematy takiego rozliczenia
wraz ze wskazaniem zalet i problemów, jakie się z nimi wiążą.

## Zgodnie z UOwL - wg udziału

Jako, że opłata śmieciowa nie dotyczy indywidualnych lokali, a całego budynku,
można ją potraktować jako koszt nieruchomości wspólnej. Przyjmując taką interpretację
należałoby obciążać właścicieli lokali zgodnie z ich udziałem w nieruchomości wspólnej.

W takim przypadku łatwo będzie wyliczyć miesięczną stawkę za m2, która dokładnie pokryje koszt związany ze śmieciami. Nie będzie też potrzebne robienie rozliczeń tego składnika jako kosztu.

Wadą tego schematu jest natomiast brak przełożenia obciążenia na faktyczny udział w
generowaniu kosztu (mały lokal, który zużywa dużo wody zapłaci mało). Może też
rodzić pytania właścicieli dlaczego nie są obciążani wg wody, skoro, wg ich wiedzy,
takie teraz obowiązują przepisy.

## Zgodne ze zużyciem wody

Jeżeli zarząd nieruchomości będzie chciał zachować proporconalność między obciążeniem
właściciela a jego udziałem w generowaniu kosztu, to należy przyjąć schemat obciążenia
wg zużycia wody w lokalu. W tym przypadku system naliczeń będzie metodologicznie
równoważny podgrzaniu wody.

W tym schemacie robimy naliczenia miesięczne wg ryczałtów/prognoz liczników a następnie
wykonujemy rozliczenie liczników po stawce wynikowej lub rozliczenie liczników po
stawce miejskiej (12,73 zł/m3) połączone z rozliczeniem kosztów.

Trudnością w tym schemacie będzie pokazanie mieszkańcom opłaty, którą nieruchomość poniosła w związku z różnicą wskaznań między lcznikiem głównym a licznikami w lokalach.
Trzeba albo będzie się wytłumaczyć z innej stawki lcznikowej przy rozliczeniu lub rozbić
rozliczenie na osobno rozliczenie liczników i kosztów.

# Procedura przygotowania naliczeń w systemie Weles3
Jeżeli stawki za m2/m3 śmieci nie istnieją jeszcze w systemie należy je dodać
z menu ```Elementy/Nazwy``` stawek w zakładce ```Zasoby```. Podane poniżej algorytmy
można wpisać w menu ```Zasoby/Edytuj algorytmy``` w zakładce ```Administracja``` przyjmując
rozszerzony sposób wprowadzania algorytmów. Wartości stawek można podać w menu ```Zasoby/Edytuj stawki``` w zakładce ```Administracja```.

## Naliczenie wg zużycia wody

### Część ryczałtowa algorytmu
Będzie się ona naliczana dla lokali bez liczników oraz ew. z licznikami jeśli nie mają prognozy. Zamiast ```<licz.os>```, ```<n.śmieci>```, ```<ilość.m3>```, ```<smieci.m3>``` należy podstawić odpowiedni numer danej/stawki

 - Gdy opłata będzie wg liczby osób: ```D<licz.os>*S<n.śmieci>*S<smieci.m3>```
 - Gdy prognoza będzie zapisana w danej: ```<ilość.m3>*S<smieci.m3>```
 - Oba warianty łączne: ```GDY D<ilość.m3> > 0 <ilość.m3>*S<smieci.m3> INACZEJ D<licz.os>*S<n.śmieci>*S<smieci.m3> KGDY```

### Część licznikowa algorytmu
Będzie ona naliczana dla lokali które mają licznik z prognozą
```(ZW+CW-ZWO)*S<smieci.m3.rozl>```. Jeżeli w systemie nie ma zdefiniowanych typów ```CW``` lub ```ZWO``` wystarczy je pominąć w tym algorytmie. Jeżeli będziemy rozliczać
śmieci po stawce wynikowej i mamy na budynku lokale bez liczników,
to numer ```<smieci.m3.rozl>``` powinien być inny niż ```<smieci.m3>```.
W pozostałych przypadkach może to być ta sama stawka.

## Naliczenie wg powierzchni/udziału
Stosujemy algorytm ```D<pow>*S<śmieci.m2>```. Zamiast ```<pow>```, ```<śmieci.m2>```, należy podstawić odpowiedni numer danej/stawki.

# Pomoc przy wprowadzeniu nowych algorytmów

Zachęcamy do kontaktu z naszym wsparciem w tym temacie. Chętnie podpowiemy,
jak zaimplementować wybrany model rozliczania w systemie.