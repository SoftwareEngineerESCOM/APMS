import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SideNavComponent} from './components/side-nav/side-nav.component';

import {UaPackagesRoutes} from '../ua-packages/ua-packages-routing.module';
import {wysiwygRoutes} from '../wysiwyg/wysiwyg-routing.module';
import {humanResourceRoutes} from '../human-resource/human-resource-routing.module';
import {userRoutes} from '../user/user-routing.module';
import {learningUnitRoutes} from '../learning-unit/learning-unit-routing.module';
import {studyPlanRoutes} from '../study-plan/study-plan-routing.module';
import {semesterRoutes} from '../semester/semester-routing.module';
import {academicProgramRoutes} from '../academic-program/academic-program-routing.module';
import {UaManagementRoutes} from '../ua-management/ua-management-routing.module';
import {AuthGuardService} from '../auth/services/auth-guard.service';

const childrenRoutes = [
  ...wysiwygRoutes,
  ...humanResourceRoutes,
  ...UaPackagesRoutes,
  ...UaManagementRoutes,
  ...userRoutes,
  ...learningUnitRoutes,
  ...studyPlanRoutes,
  ...semesterRoutes,
  ...academicProgramRoutes
];

const routes: Routes = [
  {path: '', component: SideNavComponent, children: childrenRoutes, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SideNavBarRoutingModule {
}
