# PLAN

git remote update
git status -uno
git pull

npx es-dev-server --node-resolve --watch

auto gameplay, un fondo donde esta el hero matando enemigos.

# MINIMUM VIABLE PRODUCT MVP

DONDE GUARDAR LA INFO ? localstorage

hero > mata enemigo > reward. exp & gold.
5 enemigos hasta el boss.
boss dead ? enemigos lvl up : sigues matando enemigos con opcion de enfrentar jefe nuevamente.

hero = {
name: ,
hp,
attack() {target enemie.hp - hero.dmg}
level,
}
