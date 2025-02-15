# WAP 1st projekt

# Ukol
Cílem projektu je seznámit se a pochopit programovací konstrukty jazyku JavaScript, zejména generátory a asynchronní programování. Vaším úkolem bude vytvořit knihovnu primes.mjs poskytující základní operace potřebné pro práci s prvočísly (předpokládejte datový typ Number).

Knihovna bude exportovat následující:

Asynchronní funkci isPrime, která jako vstup dostane číslo a vrátí pravdivostní hodnotu, která volajícímu sdělí, zda se jedná o prvočíslo (true), nebo ne (false).
Asynchronní funkci getPrimes, která vrátí v poli (Array) všechna prvočísla menší než jediná vstupní hodnota (threshold).
Generátor iterPrimes, který bude postupně vracet všechna prvočísla.
Je na vás, abyste si zvolili vhodné algoritmy pro výpočet prvočísel a ověření příslušnosti k prvočíslům. Je doporučené, abyste si algoritmy našli v literatuře a neobjevovali vlastní. Mimo předepsané rozhraní je na vás, jakým způsobem implementujete samotnou knihovnu, nicméně pracujte s požadavkem na to, aby si knihovna dříve vypočítaná prvočísla pamatovala až do ukončení běhu programu.

Vaši knihovnu dokumentujte a otestujte. Pište efektivní, dokumentovaný a čitelný kód.

Očekává se využití a spuštění knihovny pomocí Node.js. Ukázkový soubor použití knihovny můžete najít v Moodle včetně očekávaného výstupu.

Knihovna pojmenovaná primes.mjs bude součástí odevzdaného souboru. Dále odevzdejte testy, kterými jste knihovnu testovali.

Testy knihovny

V rámci vypracování projektu byste si měli vytvořit testy. Odevzdejte soubor test.sh, který spoustí vaše testy (spuštěný bez parametrů). Pokud budete pro testy potřebovat instalovat závislosti, implementujte parametr install pro testovací skript.

Dokumentace

Projekt dokumentujte pomocí dokumentačních řetězců přímo v kódu knihovny. Využijte nástroje jako je JSDoc, Doxygen apod. Vytvořte soubor doc.sh, který po spuštění vygeneruje dokumentaci z dokumentačních řetězců.

Pravidla vypracování projektů
Studenti ve své práci musí pracovat samostatně a tvůrčím způsobem. Vytvořený kód by měl být přehledný a komentovaný, či samopopisný. Nelze kopírovat příklady řešení, hotová řešení nebo obdobné podklady, které jsou zveřejněny nebo jsou studentům jinak dostupné (jedná se o kopírování celých řešení nebo jejich tak velkých částí, že jejich okopírování vede k funkčně shodnému nebo velmi obdobnému řešení zadání). Není dovolená společná práce ve skupinách tak, že její výsledky jsou potom odevzdávány jako řešení jednotlivce (jednotlivců).

Jak bylo zmíněno výše, je povoleno využít existující algoritmy pro výpočet prvočísel.

Studenti se musí zdržet jednání, které je v rozporu s dobrými mravy a které by mohlo vést k obcházení skutečného způsobu řešení zadání v duchu těchto zadání jimi samotnými nebo jinými studenty. Pokud student(i) poruší výše uvedená pravidla, může mu (jim) být hodnocení projektu sníženo až na 0 bodů.

Odevzdání

Do IS je třeba odevzdejte komprimovaný projekt ve formátu zip. Odevzdávaný soubor pojmenujte jako login.zip. Po rozbalení odevzdaného souboru vzniknou v aktuálním adresáři soubory primes.mjs, test.sh a doc.sh, současně mohou vzniknout další soubory zmíněné v zadání, nebo vámi požadované.

Odevzdávejte pouze Vámi vytvořené soubory, přebírání jakéhokoliv cizího kódu není povoleno.

Pro účely testování a vytváření dokumentace můžete využít cizí kód. ten však neodevzdávejte, ale zajistěte jeho získání ve skriptech test.sh a doc.sh.

Orientační hodnocení projektu

program na testovacích datech vykazuje očekávané chování - 5b.,
kvalita implementace a čitelnost kódu a dokumentace, vhodné využití jazyka JavaScript - 3b.,
kvalita vlastních testů - 2b.
Formální chyby, které nebudou tolerovány:

odevzdaný soubor nelze spustit a odzkoušet: 0 bodů
odevzdáno po termínu: 0 bodů
nedodržení zadání: 0 bodů
nefunkční kód: 0 bodů
opsáno: 0 bodů (pro všechny, kdo mají stejný kód), návrh na zahájení disciplinárního řízení.


# Run tests
```bash
make test
make ukazka
```

# Generate documentation
```bash
make docs
```

# Zip project
```bash
make pack
```

# Clean
```bash
make clean
```
