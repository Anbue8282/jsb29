import pygame,random
from bird import Bird
from pipe import Pipe
pygame.init()
#kích thước game
wwth=1000
whht=700
game=pygame.display.set_mode((wwth,whht))
pygame.display.set_caption("Fờ láp bi pớt")
#hình nền 1370x794
bg =pygame.image.load("assets/background-large.png")
bg_scale = pygame.transform.scale(bg,(1000,750))
bgxList=[0,1000]
#Bird
bird_down=pygame.transform.scale(pygame.image.load("assets/bluebird-downflap.png"),(68,48))
bird_up=pygame.transform.scale(pygame.image.load("assets/bluebird-upflap.png"),(68,48))
bird_mid=pygame.transform.scale(pygame.image.load("assets/bluebird-midflap.png"),(68,48))
birdlist=[bird_down,bird_mid,bird_up]
#base
baseimg = pygame.image.load("assets/base-large.png")
base_scale = pygame.transform.scale(baseimg,(1000,200))
bsxList=[0,1000]
#tạo đối tượng
flapBird = Bird(birdlist,170,(750-250)/2,game)
#game over
over_scale = pygame.transform.scale(pygame.image.load("assets/gameover.png"),(100,100))
#tốc độ game
game_speed=2
pipe_image_bottom=pygame.transform.scale(pygame.image.load("assets/pipe-green.png"),(78,480))
pipe_image_top=pygame.transform.rotate(pipe_image_bottom,180)
pipe_list =[]
pipe_count = 0
#chạy game
chaygame =True
clock = pygame.time.Clock()
FPS = 60
while chaygame:
    clock.tick(FPS)
    for event in pygame.event.get():
        if event.type==pygame.QUIT:
            chaygame=False
        if event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE:
            flapBird.move()
    if flapBird.die == True:
        game.blit(over_scale,(500,0))
        
        
        
    for i in range(len(bgxList)):
        game.blit(bg_scale,(bgxList[i],0))
        bgxList[i]-=game_speed
        if bgxList[i]<=-1000:
            bgxList[i]=1000
    #tạo pipe
    if flapBird.die == False:
        if pipe_count >= 100:
            bottomPipeY = random.randint(390,700)
            pipebt = Pipe(pipe_image_bottom,1000,bottomPipeY,game)
            pipet= Pipe(pipe_image_top,1000,bottomPipeY-630,game)
            pipe_list.append(pipebt)
            pipe_list.append(pipet)
            pipe_count = 0
        pipe_count +=random.randint(1,3)
        #run pipe
        for pipe in pipe_list:
            pipe.update()
        
        for pipe in pipe_list:
            if pipe.hitbox.x <= -40:
                pipe_list.remove(pipe)
    
    for i in range(len(bgxList)):
        game.blit(base_scale,(bsxList[i],550))
        bsxList[i]-=(game_speed+2)
        if bsxList[i]<=-1000:
            bsxList[i]=1000
    flapBird.chamong(pipe_list)
    flapBird.update()
    pygame.display.update()
pygame.quit()








