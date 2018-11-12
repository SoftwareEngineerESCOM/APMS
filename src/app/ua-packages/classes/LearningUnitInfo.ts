import {LearningUnitInfoInterface} from '../interfaces/LearningUnitInfoInterface';

export class LearningUnitInfo implements LearningUnitInfoInterface {
  id: string;
  learningUnitName: string;
  deadLine: string;
  analystName: string;
  status: string;

  constructor
  (id: string = null, learningUnitName: string = null, deadLine: string = null, analystName: string = null, status: string = null) {
    this.id = id;
    this.learningUnitName = learningUnitName;
    this.deadLine = deadLine;
    this.analystName = analystName;
    this.status = status;
  }
}
