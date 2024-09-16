---
layout: post
title: Il Disastro di CrowdStrike: Un Déjà Vu
tags: Bug-Bounty 2024 CrowdStrike Incident-Response
---

### Il Disastro di CrowdStrike: Un Déjà Vu
L'aggiornamento di CrowdStrike ha causato il blocco di milioni di macchine Windows, richiamando alla memoria un episodio simile avvenuto con un aggiornamento di McAfee Antivirus nel 2010. L'evento ha creato disservizi in sistemi bancari, aeroporti, per citarne solo alcuni. La connessione sorprendente tra questi due eventi è George Kurtz, CTO di McAfee nel 2010 e attuale CEO di CrowdStrike. Kurtz ha perso 300 milioni di dollari in ricchezza "su carta" a causa del fiasco di McAfee, ma la vera preoccupazione risiede nelle somiglianze tra i due incidenti.
### Il "Validator"
Le istanze del template vengono create e configurate attraverso l'uso del Sistema di Configurazione dei Contenuti, che include il Validatore di Contenuti (Validator) che esegue controlli di convalida sui contenuti prima della loro pubblicazione.
### Il Problema Tecnico
Il disastro recente di CrowdStrike è stato causato da un errore logico nel sensore Falcon, un software che opera in modalità kernel (ring zero). Questo errore si è verificato durante la lettura del famoso file Channel 291, portando al crash dell'intero sistema e spegnendo 8,5 milioni di dispositivi. Mentre alcuni sostengono che si trattasse di un semplice errore di codifica, altri ritengono che il problema sia più grave. CrowdStrike ha pubblicato le informazioni relative all'origine del problema, visibili più sotto.
### Com'è Successo?
CrowdStrike ha ufficialmente spiegato le cause degli eventi in un post sul blog. Ecco la dettagliata successione degli eventi, riassunta:
#### Cronologia
**Rilascio del Contenuto del Sensore**: Il 28 febbraio 2024, il sensore 7.11 è stato reso generalmente disponibile ai clienti, introducendo un nuovo tipo di template IPC per rilevare nuove tecniche di attacco che abusano delle Named Pipes. Questo rilascio ha seguito tutte le procedure di test del contenuto del sensore descritte nella sezione del contenuto del sensore.
**Test di Stress del Tipo di Template**: Il 5 marzo 2024, un test di stress del tipo di template IPC è stato eseguito nel nostro ambiente di staging, che consiste in una varietà di sistemi operativi e carichi di lavoro. Il tipo di template IPC ha superato il test di stress ed è stato convalidato per l'uso.
**Rilascio dell'Istanze del Template tramite Channel File 291**: Il 5 marzo 2024, dopo il successo del test di stress, un'istanza del template IPC è stata rilasciata in produzione come parte di un aggiornamento della configurazione del contenuto. Successivamente, tre ulteriori istanze di template IPC sono state distribuite tra l'8 aprile 2024 e il 24 aprile 2024. Queste istanze di template hanno funzionato come previsto in produzione.
### Cosa è Successo il 19 Luglio 2024?
Il 19 luglio 2024, due ulteriori istanze del template IPC sono state distribuite. A causa di un bug nel Validator, una delle due istanze del template ha superato la validazione nonostante contenesse dati problematici. Basandosi sui test effettuati prima del rilascio iniziale del tipo di template (il 5 marzo 2024), sulla fiducia nei controlli eseguiti dal Validator e sui precedenti rilasci di successo delle istanze del template IPC, queste istanze sono state distribuite in produzione.
Quando sono state ricevute dal sensore e caricate nel Content Interpreter, il contenuto problematico nel Channel File 291 ha causato una lettura fuori dai limiti della memoria (OOB access), innescando un'eccezione in ring zero. Questa eccezione imprevista non poteva essere gestita correttamente in quanto a livello kernel, causando il crash del sistema operativo Windows (BSOD).
### Teorie del Complotto e Qualità del Software
Si ipotizza che l'incidente possa essere stato un atto intenzionale da parte di una spia straniera o di un dipendente ribelle, o persino un evento pianificato in anticipo. L'importanza di test approfonditi e del controllo qualità nello sviluppo del software è cruciale per evitare disastri simili in futuro.
### Conclusione
Il disastro di CrowdStrike mette in evidenza la necessità critica di garantire la qualità del software attraverso test rigorosi. Non è facile mantenere la qualità del codice ed è necessario condurre test rigorosi e continui. Anche grandi aziende come CrowdStrike possono commettere errori.

**Stay informed, stay secure.**

CyberDart Team
