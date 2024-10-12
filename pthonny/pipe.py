class Pipe:
    def __init__(self,img,x,y,game):
        self.img = img
        self.x = x
        self.y=y
        self.game=game
        self.hitbox = self.img.get_rect(center=(self.x,self.y))
    def update(self):
        self.hitbox.x-=5
        self.game.blit(self.img,self.hitbox)
        