import {ActionButtonInterface} from '../interfaces/ActionButtonInterface';

export class ActionButton implements ActionButtonInterface
{
  viewValue: string;
  execAction: any;
  constructor(viewVal: string, execAction: any = null)
  {
    this.viewValue = viewVal;
    this.execAction = execAction;
  }
}
