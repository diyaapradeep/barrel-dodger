namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
let projectile: Sprite = null
let mySprite: Sprite = null
tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101010101010101010101010101010101010101`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tileGrass2],
            TileScale.Sixteen
        ))
mySprite = sprites.create(img`
. . . . . . . . . . . . . . 
. . . . . f f f f . . . . . 
. . . f f 5 5 5 5 f f . . . 
. . f 5 5 5 5 5 5 5 5 f . . 
. f 5 5 5 5 5 5 5 5 5 5 f . 
c b 5 5 5 d b b d 5 5 5 b c 
f 5 5 5 b 4 4 4 4 b 5 5 5 f 
f 5 5 c c 4 4 4 4 c c 5 5 f 
f b b f b f 4 4 f b f b b f 
f b b e 1 f d d f 1 e b b f 
c f b 4 4 d d d d d f b f c 
. c d d d 4 9 9 9 6 c e c . 
. c 4 d d 4 9 9 9 9 c 4 e . 
. . c e e b b b 3 b b c e . 
. . c c 3 b 3 b 3 3 c c . . 
. . . . c c c b b c . . . . 
`, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 5))
mySprite.ay = 500
game.onUpdateInterval(2000, function () {
    projectile = sprites.createProjectileFromSide(img`
1 1 1 e e e e e e e e e e 1 1 1 
1 1 1 e e e e e e e e e e 1 1 1 
1 1 1 e e e e e e e e e e 1 1 1 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
1 1 1 e e e e e e e e e e 1 1 1 
1 1 1 e e e e e e e e e e 1 1 1 
1 1 1 e e e e e e e e e e 1 1 1 
`, Math.randomRange(-100, -80), 0)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
    info.changeScoreBy(1)
})
