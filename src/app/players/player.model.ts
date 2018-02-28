import { List } from "../shared/list-model";


export class Player {
    public name: string;
    public description: string;
    public imagePath: string;
    public points: string;
    public total: string;
    public lists: List[];
  
    constructor(name: string, desc: string, imagePath: string, points:string, total: string ,lists: List[]) {
      this.name = name;
      this.description = desc;
      this.imagePath = imagePath;
      this.points = points;
      this.total = total;
      this.lists = lists;
    }
  }
  