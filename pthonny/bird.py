import pygame
class Bird():
    def __init__(self,birdlist,x,y,game):
        self.birdlist=birdlist
        self.indeximg=0 #chỉ số để tạo hiệu ứng
        self.img=self.birdlist[self.indeximg]
        self.x=x
        self.y=y
        self.game=game
        #giá trị riêng
        self.hitbox=self.img.get_rect(center=(self.x,self.y))
        self.movement=0
        self.angle=0
        self.die=False
    def update(self):
        self.indeximg+=0.2
        if self.indeximg>2.5:
            self.indeximg=0
        self.img=self.birdlist[int(self.indeximg)]
        if self.die == False:
            self.movement+=0.2        
            if self.hitbox.y <=750:
                self.hitbox.y+=self.movement
            if self.movement<0:
                self.angle=max(self.movement*3,-60)
            else:
                self.angle=min(self.movement*3,60)
        rotated_bird=pygame.transform.rotate(self.img,-self.angle)
        self.game.blit(rotated_bird,self.hitbox)
    def move(self):
        if self.die == False:
            self.movement = -5
        
    def chamong(self,pipelist):
        for pipe in pipelist:
            if self.hitbox.colliderect(pipe.hitbox) or self.hitbox.y>600:
                self.die = True
                break