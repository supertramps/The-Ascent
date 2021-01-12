class HeadsUpDisplay {
  public depth: number;
  public hullHealth: HullHealth;
  
  public constructor(hullHealth: HullHealth) {
    this.depth = 1000;
    this.hullHealth = hullHealth;
    console.log(this.hullHealth)
  }

  public update() {
    this.depth -= deltaTime / 100;
  }

  public draw() {
    
    push()
    textSize(32);
    fill("rgba(0,255,0,0.25)");
    noStroke()
    text(
      "HULL HEALTH: " + Math.floor(this.hullHealth.hullHealth) + "%",
      width / 2 + 100,
      height - 10
    );
    text("DEPTH: " + Math.floor(this.depth) + " METERS", width / 2 - 400, height - 10);
    pop()
  }

  public timeIt() {
    if (this.depth > 0) {
      this.depth--;
    }
  }
}

