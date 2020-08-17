---
layout: post
title: Ewolucja UX Weles3
description: Aktualizacja wyglądu i komfortu użytkowania systemu
icon: /svg/nznt.svg
tags: [nz, w3, tmd]
readTime: 15
---

# Historia 

Weles3 zaczęliśmy pisać ok 2006 roku. W tamtym okresie dominującą przeglądarką
na rynku był jeszcze Internet Explorer (wersja 6), a tworzenie aplikacji w
technologii on-line dopiero raczkowało jako koncepcja. Oferowaliśmy wówczas
poprzednią wersję naszego systemu: Weles2FK, który był systemem instalowanym lokalnie na komputerze.

Widząc potencjał nowych technologii zdecydowaliśmy się na stworzenie systemu całkowicie on-line.
Nie było to zadaniem łatwym, ale udało się i w styczniu 2008 sprzedaliśmy pierwszą komercyjną 
licencję na Weles3.

Stworzone w tym czasie narzędzia, w których tworzymy Weles3 dobrze nam służyły, ale od pewnego czasu
zaczęliśmy widzieć konieczniość dokonania pewnych zmian. Kwestie, które chcieliśmy poprawić to:
 - __brak spójnej koncepcji graficznej/kolorystycznej__ - razem z rozwojem systemu powstawała dokumentacja,
strona www, strony ofertowe, strony usług dodatkowych. Każda w formie wybranej akurat przez osobę, która się
tym zajmowała. Nie było poczucia, że te elementy są w ramach jednego systemu
 - __interface pisany w słabo typowanym języku (javascript)__ - słabo typowane języki są przydatne do szybkiego stworzenia
czegoś, ale utrzymanie kodu i aktualizacje robią się coraz trudniejsze wraz z wielkością projektu
 - __wygląd__ - interface Weles3 był tworzony wg paradygmatów z tamtego okresu. Przez te 12 lat świad poszedł do przodu, użytkownicy
są już przyzwyczajeni do innych wyglądów kontrolek i układów stron.
 - __funkcje__ - przez ten okres przeglądarki poszły bardzo do przodu i oferują wiele funkcji, które warto by wykorzystać
aby usprawnić pracę z systemem
 - __logowanie__ - dotychczas właściciele i zarządcy logowali się tą samą ścieżką, co powodowało, że nie każda funkcja dostępna
na stronie logowania była właściwa dla danego użytkownika

# Nowy design

Zaczęliśmy od opracowania nowych logotypów:
<div class="d-flex flex-row mb-4">
    <img class="flex-grow-1 nz-logo-lg" src="{{ site.data.icons.w3u }}">
    <img class="flex-grow-1 nz-logo-lg" src="{{ site.data.icons.tmdu }}">
    <img class="flex-grow-1 nz-logo-lg" src="{{ site.data.icons.wku }}">
    <img class="flex-grow-1 nz-logo-lg" src="{{ site.data.icons.zzu }}">
    <img class="flex-grow-1 nz-logo-lg" src="{{ site.data.icons.nzu }}">
</div>

Oraz nowej, podstawowej palety kolorystycznej
<div class="d-flex flex-row mb-4">
    <div class="flex-grow-1 nz-logo-lg" style="background-color:var(--wls-base-dark)"></div>
    <div class="flex-grow-1 nz-logo-lg" style="background-color:var(--wls-base-light)"></div>
    <div class="flex-grow-1 nz-logo-lg" style="background-color:var(--wls-logo-dark)"></div>
    <div class="flex-grow-1 nz-logo-lg" style="background-color:var(--wls-logo-light)"></div>
    <div class="flex-grow-1 nz-logo-lg" style="background-color:var(--wls-gray-dark)"></div>
    <div class="flex-grow-1 nz-logo-lg" style="background-color:var(--wls-gray-light)"></div>
    <div class="flex-grow-1 nz-logo-lg" style="background-color:var(--wls-hint)"></div>
</div>

Zrezygnowaliśmy z [dotychczasowych rastrowych ikon <i class="fad fa-external-link"></i>](http://www.famfamfam.com/lab/icons/)
na rzecz [nowocześniejszych wektorowych <i class="fad fa-external-link"></i>](https://fontawesome.com/), wyświetlanych
w naszych nowych kolorach

<div class="d-flex flex-row mb-4">
    <i class="fad fa-laugh nz-logo-lg flex-grow-1"></i>
    <i class="fad fa-thumbs-up nz-logo-lg flex-grow-1"></i>
</div>

Przyjęliśmy także następujące wytyczne:
- __reactive__ - obecnie coraz więcej przeglądamy na urządzeniach mobilnych - strony muszą sie prezentować
tak samo dobrze na małych ekranach, jak i na dużych
- __biel__ - strony mają być jasne i przejrzyste z dużą ilością bieli, aby miejsca akcji i informacje były
łatwe do znalezienia dla oka i nie ginęły w tłumie ozdób i grafik
- __jasność nawigacji__ - każda strona powinna mieć orkeślony cel i ograniczać zbędne elementy nawigacyje, niezwiązane
z jej funkcją.

# Realizacje

Na podstawie nowych koncepcji przygotowaliśmy nowe strony logowania:
 - __właściciela__ - przez [ToMojDom.pl <i class="fad fa-external-link"></i>](https://tomojdom.pl)
 - __zarządcy__ - przez [logowanie.Weles3.pl <i class="fad fa-external-link"></i>](https://Weles3.pl/logowanie/)

Przygotowaliśmy też nowe witryny:
 - __Weles3__ - przez [Weles3.pl <i class="fad fa-external-link"></i>](https://Weles3.pl)
 - __Księgowość__ - przez [WspolnotyKsiegowosc.pl <i class="fad fa-external-link"></i>](https://WspolnotyKsiegowosc.pl)
 - __Blog__ - przez [NowoczesnyZarzadca.pl <i class="fad fa-external-link"></i>](https://NowoczesnyZarzadca.pl)

Jesteśmy w trakcie prac nad aktualizacją:
 - __Wyszukiwarki zarządcy__ - przez [ZnajdzZarzadce.pl <i class="fad fa-external-link"></i>](https://ZnajdzZarzadce.pl)

# Interface Weles3

Idąc za ciosem przygotowaliśmy nowy silnik interface do Weles3. Nowe narzędzie jest pisane w mocniej typowanym języku TypeScript,
co bardzo ułatiwa nam jego rozwój. Przygotowaliśmy nowe, odświeżone wersję kontrolek i wyglądu okien, korzystając po drodze z nowych funkcji przeglądarek.

Korzyści jakie daje nowy interface:
- __brak koniecnzości potwierdzania hasłem__ - dzięki odpowiedniemu trzymaniu sesji w bazie w przeglądarce (indexeddb) nie ma potrzeby zatwierdzania hasłem każdej operacji
- __skóty klawiszowe__ - są teraz czytelnie opisane na poszczególnych przyciskach
- __wyszukiwanie__ - pole wyszukiwania na drzewku jest teraz zawsze widoczne i opisane skrótem klawiszowym ```/```
- __adekwatny układ okna__ - dotychczas zmiany były realizowane przez tzw układ okna dialogowego - ten układ zostaje do wprowadzania powiązań między elementami (np
przypisanie danej do lokalu), do edycji samych elementów, między którymi będą potem powiązania stworzony został nowy, bardziej intuicyjny tym przypadku układ (np
okno edycji kontrahentów).

# Plan na przyszłość

Obecnie koncentrujemy się na aktualizacji obecnego interface do jego nowej wersji. Po realizacji tego celu mamy już w planach nowe, użyteczne funkcje, które
pozwolą na jeszcze bardziej przyjemną i efektywną pracę. Zarówno dla użytkowników przed komputerem, jak i pracujących w na urządzeniach mobilnych.