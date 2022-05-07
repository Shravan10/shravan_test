import { Component, OnInit } from '@angular/core';
import { FetchQuestionService } from 'src/app/service/fetch-question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
question:any;
listData:any=[];
  subjectList:{sub_name:string, sub_id:string}[]=[];
  constructor(private service:FetchQuestionService) { }

  ngOnInit(): void {
    this.service.fetchQuestionList().subscribe((res:any)=> {
      this.subjectList = res.data;
    })
  }

  getQuestions(subId:any) {
    this.service.fetchQuestionListData(subId).subscribe((res:any)=> {
      console.log(res)
      this.listData = res.data.data;
      console.log(this.listData)
      

    })
  }

}
