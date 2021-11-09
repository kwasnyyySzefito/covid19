#1. W jaki sposób możemy w js zadeklarować zmienną jako pusty obiekt.
    Użyj dwóch znanych modyfikatorów let i const i opisz różnicę między nimi.


    const = [];
    let x = "";

    Słowo kluczowe let deklaruje zmienną w zasięgu bloku, 
    wraz z opcjonalnym zaincjalizowaniem wartością. 
    Słowo kluczowe const deklaruje stałe w zasięgu bloku, 
    podobne do słowa kluczowego let , ale nie można zmienić wartości tej stałej. 
    Deklaracja const tworzy referencję typu read-only do wartości.


#2.  Jakie znasz typy zmiennych w JS. Wybierz cztery z nich i opisz ich zastosowanie.


    int_number = 10; // zmienna typu całkowitego, gdzie typ określony został przez podstawianą wartość
    float_number = 10.; // zmienna typu zmiennoprzecinkowego
    text = "jakiś tekst"; // zmienna typu string
    bolean = true; // zmienna warunkowa, które może przyjmować wartość true lub false


#3. Mając zadeklarowane dwie zmienne boolowskie isAuthorized oraz isClicked wyświetl 
    paragraf z opisem operacja udana jeśli obie są ustawione jako true i paragraf 
    z opisem operacja nieudana w przeciwnym wypadku.

    isAuthorized = Boolean(false)
    isClicked = Boolean(true)
    if(isAuthorized && isClicked ==(true)) {
        console.log('Operacja udana');
    } else {
        console.log('Operacja nieudana');
    }



#4.
    isAuthorized = Boolean(true)
    isClicked = Boolean(true)
    if(isAuthorized ^ isClicked ==(true)) {
       console.log('Operacja udana');
    } else {
        console.log('Operacja nieudana');
    }


#5. Jak można pobrać znak znajdujący sięna dowolnym miejscu w ciągu znaków. 
    Pobierz i wyświetl 5 literę z ciągu To jest test.


    const text = "To jest test";
    console.log(text.charAt(5));
    

#6. {W jaki sposób w JS możemy złączyć ze sobądwa ciągi znaków?
    Pokaż dwa sposoby na dowolnym przykładzie. 


    var tekst = "Dzień dobry ";
    tekst = tekst + 'Wieczór ';
    console.log(tekst);


    var s1="jeden,";
    var s2="dwa";
    var s3="jeden";
    var text=s1.concat(s2,s3);

    console.log(text)


#7.  Mając daną dowolną tablicę np. to, jest, test, pokaż jak można z niej 
    usunąć wszystkie wyrazy zaczynające sięna literę t


    var totu = 'to, jest, test'.split(", ");
    let usun = totu.filter(t => ! t.startsWith('t'));
    console.log(usun);


#8.


#9. 
Classes UserPersonalInfo {

  Constructor (name) {
  
                  This.name = name;
  
  }
  
  Introduce() {
  
    Console.log(‘Mam na imię ${This.name}’);
  
  }
  
  }
  
  Const Karzysiu = new Person (‘Karzysiu’);
  
  Karzysiu.introduce();


#10.  Czym jest i jak działa w języku JS konstruktor?


    Konstruktor umożliwia zdefiniowanie inicjalizacji obiektu, 
    która musi się wykonać, 
    zanim będzie można wywołać metody obiektu. 
    Klasa ValidationError nie musi mieć niestandardowego konstruktora, 
    ponieważ domyślny konstruktor wywołuje konstruktor klasy Error




#11.  Czym jest metoda statyczna?
    Najczęściej metody statyczne są wykorzystywane, jeśli chcemy wykonać ten sam algorytm w wielu miejscach w projekcie. 
    Na przykład możemy stworzyć metodę, która będzie przyjmować obiekt Item i na jego podstawie wydrukuje nam nazwę itema na konsolę. 
    Ważne jest, że ten algorytm nie powinien zmieniać stanu obiektów, na których operuje. 
    Jeśli stan ten jest zmieniany (na przykład zmieniana jest nazwa obiektu albo jego id, czy też inne dane zapisane w jego polach), 
    wówczas nie powinniśmy korzystać z metody statycznej.


#12.
    Protokół HTTP określa nam dokładnie format komunikacji między serwerem a klientem. Komunikacja ta opiera się na wyżej opisanych żądaniach i odpowiedziach. Protokół HTTP określa po prostu format tychże wiadomości.
    Protokół HTTP jest bezstanowy, co oznacza, iż każde spośród zapytań może.zostac zinterpretowane w oderwaniu od reszty.
    Poza serwerami i klientami w komunikacji muszą występować dodatkowe węzły. Mogą to być przykładowo serwery, które zachowają kopię odpowiedzi, przyspieszając tym samym komunikację. Mogą to być również elementy sieciowe, które umożliwiają sprawne docieranie żądań do serwera.
    W trakcie wpisywania adresu do przeglądarki korzystamy z metody URL
    
    
    
    
    PRACA WYKONANA PRZEZ OSOBY:
- KACPER WAŚNIEWSKI,
- KRZYSZTOF MAZURKIEWICZ.
    
    
    


