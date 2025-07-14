# JobFinder Front-End

📘 Uživatelská příručka
🧑 Uživatel
1. Registrace
   Navštivte stránku Registrace uživatele (/user/signup).

Vyplňte e-mail, heslo a další osobní údaje.

Obdržíte ověřovací kód e-mailem – zadejte jej pro aktivaci účtu.

2. Přihlášení
   Přihlašte se pomocí e-mailu a hesla na stránce /user/login.

Po přihlášení je token uložen v localStorage.

3. Úprava osobních údajů
   Otevřete stránku Můj účet.

Můžete upravit osobní údaje a přihlašovací informace.

4. Zobrazení volných míst
   Otevřete Všechny volné pozice (/vacancies).

Pomocí filtru (lokalita, technologie, název) vyhledejte vhodné pozice.

5. Analýza životopisu
   Nahrajte životopis ve formátu PDF na stránce Analýza CV.

Po odeslání se zobrazí výsledky a doporučení.

Výsledky si můžete uložit.

6. Doporučené pozice
   Otevřete stránku Vhodné volné pozice.

Zobrazí se automaticky doporučené nabídky dle vašeho profilu a CV.

7. Odpověď na nabídku
   Na detailu pracovní pozice klikněte na Odpovědět na pozici.

Odpověď se uloží a firma ji může schválit nebo odmítnout.

8. Oblíbené pozice
   Klikněte na ikonu „hvězdičky“ u nabídky – pozice bude přidána do oblíbených.

V sekci Oblíbené pozice najdete všechny uložené nabídky.

Můžete je odstranit nebo znovu otevřít.

9. Stav odpovědí
   V části Moje odpovědi najdete přehled všech pozic, na které jste odpověděli, a jejich stav (přijato/odmítnuto/čeká).



🏢 Firma
1. Registrace a přihlášení
   Firma se registruje na stránce /company/signup.

Přihlášení probíhá přes /company/login.

2. Úprava údajů
   Po přihlášení přejděte na Můj profil firmy a upravte kontaktní informace, heslo atd.

3. Vytvoření nové pozice
   V menu zvolte Vytvořit pozici.

Vyplňte název pozice, požadavky, nabídky, technologie atd.

Uložte pozici – bude zveřejněna pro uživatele.

4. Správa pozic
   Na stránce Moje pozice vidíte všechny aktivní nabídky.

Můžete je upravovat nebo smazat.

5. Reakce uchazečů
   V detailu pozice klikněte na Zobrazit reakce.

U každého uchazeče lze kliknout na Přijmout nebo Odmítnout.

Stav odpovědi se uloží a uživatel je notifikován.

🛠️ Administrátorská příručka
👤 Správa uživatelů
V části Admin panel → Všichni uživatelé lze zobrazit seznam registrovaných uživatelů.

Možnost zobrazit e-mail, ID, a další údaje.

🏭 Správa firem
V části Všechny firmy je k dispozici seznam registrovaných společností.

🧪 Správa technologií
Admin může:

Přidávat nové technologie (např. „React“, „Node.js“),

Vyhledávat technologie,

Mazat technologie, které se již nepoužívají.

🔐 Poznámky k zabezpečení
Každý přístup chráněn tokenem (Authorization: Bearer {token}).

Token se ukládá v localStorage.

Ověření probíhá při každém API volání.

Automatické přesměrování na login při expiraci tokenu.



JobFinder Project (In development)