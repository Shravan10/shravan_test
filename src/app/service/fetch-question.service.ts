import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchQuestionService {

  constructor(private http: HttpClient) { }

  fetchQuestionList()
  {
    return this.http.get('https://test.qualityeducation.in/api/question-subject-get');
  }

  fetchQuestionListData(id:string)
  {
    return this.http.post('https://test.qualityeducation.in/api/question-list',{sub_id:id, limit:10});
  }

}
