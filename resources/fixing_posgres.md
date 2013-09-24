Once upon a time... 
...you opened up your personal computer and partially installed PostGres, and now it's throwing errors every time you try to create or merge a database.

Here's how I got my version of PostGres fixed (thanks to Topher). Hopefully it will work for you, too, if you're having trouble with your postgresabases.

Assuming you have homebrew installed...

:> brew reinstall postgresql

==A BUNCH OF STUFF!==

==> Caveats
initdb /usr/local/var/postgres -E utf8    # create a database

==MORE STUFF!==

Hey, that line that said "# create a database" looks pretty important. I wonder what happens if I do this?

:> initdb /usr/local/var/postgres -E utf8

==SOME STUFF==

creating directory /usr/local/var/postgres ... ok

==MORE STUFF - WOOHOO!!==

Mazel tov. You can now create and migrate your postgres databases. But only if your problem was the same as my problem.

Good luck,

-David Reiman

