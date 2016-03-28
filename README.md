# swehack
swehack.org configuration and information

#### swehack security and privacy adjustments
* Hard code "127.0.0.1" as IP for all members
* No logging
* Auto remove private messages after X days
* Techniques to fight onion-rewriting
* Check if private messages are PGP-encrypted (see [check_pgp.js](https://github.com/intchloe/swehack/blob/master/check_pgp.js))
* Check if the user is using our domains (and not onion.cab/link, Tor2Web) (see [check_domain.js](https://github.com/intchloe/swehack/blob/master/check_domain.js))
* Eliminate disclosure-attacks by giving a neutral answer on forgot password, registration and login
* Dynamic CSP
* No need for email at registration
* Password policy - at least 6 chars, 1 uppercase and digit. 255 max
* No personal information in emails (no username)
* Random blinding at forgot password-page to eliminate timing attacks
* Longer GUID(6-12 chars) and reset password(12 chars) at forgot password URL in mail
* Custom CSP-violate-reporter served locally and via .onion
