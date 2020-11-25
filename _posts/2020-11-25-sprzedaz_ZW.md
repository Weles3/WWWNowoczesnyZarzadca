---
layout: post
title: Ewidencja sprzedaży VAT ZW jako dokument WEW na JPK_V7
description: Dodaliśmy możliwość ewidencji sprzedaży VAT ZW jako dokumentu WEW w przypadku gdy zaliczki dla właścicieli nie zawierają pozycji VAT
icon: /svg/w3nt.svg
tags: [w3]
readTime: 5
---

# Pobieranie danych do JPK_V7

Weles3 pobiera do plików JPK pozycje które oznaczone są jako posiadające VAT.
Oznacza to w szczególności, że nie będą brane pod uwagę pozycje oznaczone jako ND (nie dotyczy)
na zaliczkach.

W przypadku niektórych naszych klientów dotychczas zaliczki były księgowane bez VAT (ND)
a następnie na potrzeby JPK księgowany była zbiorcza pozycja z oznaczeniem VAT ZW.
Nowy JPK wymaga aby tego typu księgowanie oznaczone było jako dokument WEW.

# Rozwiązanie

Dodaliśmy w oknach księgowania dokumentów (zwykłym i ze skanów) opcję oznaczenia dokumentu jako WEW.
Zmiana jest już dostępna w systemie.