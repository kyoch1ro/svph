import { Component, OnInit } from '@angular/core';
import { FeaturedSurvey } from 'app/shared/survey-carousel/f-survey.model';
import { LoginComponent } from 'app/shared/login/login.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fSurveys : FeaturedSurvey[];
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.fSurveys = [
      new FeaturedSurvey({ id: '1', respondent: '1026', question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'}),
      new FeaturedSurvey({ id: '2', respondent: '608', question: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, '}),
      new FeaturedSurvey({ id: '3', respondent: '412', question: 'but also the leap into electronic typesetting, remaining essentially unchanged'}),
    ]
  }


  signIn(content){
     this.modalService.open(content);
  }

}
