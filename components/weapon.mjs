import Component from "./component.mjs";
import { SPRITES } from "../tiles.mjs";

function createWeapon(data) {
    return {
        ...Component.createComponent(data),
        sprite: Number.parseInt(data[3]),
        name: data[4].trim,
        attackBonus: Number.parseInt(data[5]),
        heroRow: Number.parseInt(data[6])
    };
}

function draw(ctx, weapon) {
    Component.draw(ctx, weapon, SPRITES.items, weapon.sprite, 0);
}

const Weapon = {
    createWeapon,
    draw
};

export default Weapon;