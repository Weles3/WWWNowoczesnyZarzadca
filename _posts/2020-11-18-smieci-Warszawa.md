---
layout: post
title: Nowy sposób obciążeń za śmieci w Warszawie od 2020-12-01 [aktualizacja]
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

W tym schemacie powinno się wprowadzić wyliczone z systemu średnie zużycia
jako dane w poszczególnych lokalach lub skorzystać z prognoz liczników jeżeli
są one wyliczane na podstawie zużyć.

__W tym schemacie nie ma konieczności rozliczania liczników__. Wyliczone średnie
zużycia odpowiadają zużyciom w poprzednich okresach i stanowią właściwą podstawę proporcji.
Rozliczenie różnic między licznikiem głównym a licznikami indywidualnymi
będzie można wykonać za pomocą mechanizmu rozliczenia kosztów.

__Jeżeli chcemy rozliczać w tym schemacie liczniki należy pamiętać, że takie rozliczenie przeniesie
proporcję rodziału do zużyć bieżącego okresu, czyli innego niż będący podstawą naliczenia na śmieci__.

# Procedura przygotowania naliczeń w systemie Weles3
Jeżeli stawki za m2/m3 śmieci nie istnieją jeszcze w systemie należy je dodać
z menu ```Elementy/Nazwy``` stawek w zakładce ```Zasoby```. Podane poniżej algorytmy
można wpisać w menu ```Zasoby/Edytuj algorytmy``` w zakładce ```Administracja``` przyjmując
rozszerzony sposób wprowadzania algorytmów. Wartości stawek można podać w menu ```Zasoby/Edytuj stawki``` w zakładce ```Administracja```.

W Welesie dodaliśmy nowy wydruk ```Średnie zużycia liczników``` który pozwala wyeksportować dane dot średnich zużyc,
któe mogą posłużyć za postawę naliczeń.
## Naliczenie wg zużycia wody

### Część ryczałtowa algorytmu
Będzie się ona naliczana dla lokali bez liczników oraz ew. z licznikami jeśli nie mają prognozy. Zamiast ```<licz.os>```, ```<n.śmieci>```, ```<ilość.m3>```, ```<smieci.m3>``` należy podstawić odpowiedni numer danej/stawki

 - Gdy opłata będzie wg liczby osób: ```D<licz.os>*S<n.śmieci>*S<smieci.m3>```
 - Gdy prognoza będzie zapisana w danej: ```D<ilość.m3>*S<smieci.m3>```
 - Oba warianty łączne: ```GDY D<ilość.m3> > 0 D<ilość.m3>*S<smieci.m3> INACZEJ D<licz.os>*S<n.śmieci>*S<smieci.m3> KGDY```

### Część licznikowa algorytmu
Będzie ona naliczana dla lokali które mają licznik z prognozą
```GDY TYP < 4 (ZW+CW-ZWO)*S<smieci.m3.rozl> KGDY```. Jeżeli w systemie nie ma zdefiniowanych typów ```CW``` lub ```ZWO``` wystarczy je pominąć w tym algorytmie. Jeżeli będziemy rozliczać
śmieci rozliczeniem liczników (odradzamy) po stawce wynikowej i mamy na budynku lokale bez liczników,
to numer ```<smieci.m3.rozl>``` powinien być inny niż ```<smieci.m3>```.
W pozostałych przypadkach może to być ta sama stawka.
Część licznikową trzeba wprowadzić jako algorytm rozszerzony. Zapis ```GDY TYP < 4 ... KGDY``` oznacza aby nie robić rozliczeń liczników.

## Naliczenie wg powierzchni/udziału
Stosujemy algorytm ```D<pow>*S<śmieci.m2>```. Zamiast ```<pow>```, ```<śmieci.m2>```, należy podstawić odpowiedni numer danej/stawki.

# Pomoc przy wprowadzeniu nowych algorytmów

Zachęcamy do kontaktu z naszym wsparciem w tym temacie. Chętnie podpowiemy,
jak zaimplementować wybrany model rozliczania w systemie.