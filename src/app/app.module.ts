import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthModule} from './auth/auth.module';
import {WYSIWYGModule} from './wysiwyg/wysiwyg.module';
import {HumanResourceModule} from './human-resource/human-resource.module';
import {SideNavBarModule} from './side-nav-bar/side-nav-bar.module';
import {UaPackagesModule} from './ua-packages/ua-packages.module';
import {UserModule} from './user/user.module';
import {LearningUnitModule} from './learning-unit/learning-unit.module';
import {StudyPlanModule} from './study-plan/study-plan.module';
import {SemesterModule} from './semester/semester.module';
import {AcademicProgramModule} from './academic-program/academic-program.module';
import {UaManagementModule} from './ua-management/ua-management.module';
import {UtilsModule} from './utils/utils.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    SideNavBarModule,
    WYSIWYGModule,
    HumanResourceModule,
    UaPackagesModule,
    UaManagementModule,
    UserModule,
    LearningUnitModule,
    StudyPlanModule,
    SemesterModule,
    AcademicProgramModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
