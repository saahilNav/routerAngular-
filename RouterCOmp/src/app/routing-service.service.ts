import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { ModelStructure } from './model';


@Injectable({
  providedIn: 'root'
})
export class RoutingServiceService {

  constructor(private http:HttpClient) { }

  public valueChange: BehaviorSubject<any> = new BehaviorSubject<any>('');
  public value = [
    {
      id:0,
      Summary: "Article About newspapar Templete",
      date: '2-1-2019',
      Editor: 'Shiv Kumar Btalvi',
      Title: 'NEWSPAPER TEMPLATES FOR STUDENTS',
      Description: 'students who need newspaper templates will enjoy using our Cloud Designer!We have hundreds of templates to use, and each template can be completely customized in our easy to use Cloud Designer. It has never been easier to design and print a school newspaper. No software to download, all you need is an internet connection and a computer.We have many categories and many different templates to choose from',
      NewsPic: 'assets/downloa.jpg'
    },
    {  id:1,
      Summary: "Article About newspapar Templete",
      date: '2-1-2019',
      Editor: 'Balvir singh',
      Title: 'NEWS FOR Young Student',
      Description: 'students who need newspaper templates will enjoy using our Cloud Designer!We have hundreds of templates to use, and each template can be completely customized in our easy to use Cloud Designer. It has never been easier to design and print a school newspaper. No software to download, all you need is an internet connection and a computer.We have many categories and many different templates to choose from',
      NewsPic: 'assets/news1.jpg'
    },
    {
      id:2,
      Summary: "Article About newspapar Templete",
      date: '2-1-2019',
      Editor: 'Bajinder rao',
      Title: 'NEWSPAPER TEMPLATES FOr Youth',
      Description: 'students who need newspaper templates will enjoy using our Cloud Designer!We have hundreds of templates to use, and each template can be completely customized in our easy to use Cloud Designer. It has never been easier to design and print a school newspaper. No software to download, all you need is an internet connection and a computer.We have many categories and many different templates to choose from',
      NewsPic: 'assets/news1.jpg'
    }, {
      id:3,
      Summary: "Article About newspapar Templete",
      date: '2-1-2019',
      Editor: 'Shiv Kumar Btalvi',
      Title: 'NEWSPAPER TEMPLATES FOR STUDENTS',
      Description: 'students who need newspaper templates will enjoy using our Cloud Designer!We have hundreds of templates to use, and each template can be completely customized in our easy to use Cloud Designer. It has never been easier to design and print a school newspaper. No software to download, all you need is an internet connection and a computer.We have many categories and many different templates to choose from',
      NewsPic: 'assets/downlo.jpg'
    },
    { id:4,
      Summary: "Article About newspapar Templete",
      date: '2-1-2019',
      Editor: 'Shiv Kumar Btalvi',
      Title: 'NEWSPAPER TEMPLATES FOR STUDENTS',
      Description: 'students who need newspaper templates will enjoy using our Cloud Designer!We have hundreds of templates to use, and each template can be completely customized in our easy to use Cloud Designer. It has never been easier to design and print a school newspaper. No software to download, all you need is an internet connection and a computer.We have many categories and many different templates to choose from',
      NewsPic: 'assets/downloa.jpg'
    },
    {
      id:5,
      Summary: "Article About newspapar Templete",
      date: '2-1-2019',
      Editor: 'Shiv Kumar Btalvi',
      Title: 'NEWSPAPER TEMPLATES FOR STUDENTS',
      Description: 'students who need newspaper templates will enjoy using our Cloud Designer!We have hundreds of templates to use, and each template can be completely customized in our easy to use Cloud Designer. It has never been easier to design and print a school newspaper. No software to download, all you need is an internet connection and a computer.We have many categories and many different templates to choose from',
      NewsPic: 'assets/news1.jpg'
    },
  ];

  


  
  // getValue():Observable<ModelStructure[]> {
  //   console.log(this.value);
  //   return of(this.value);
  // }
   getData(): Promise<ModelStructure[]> {
    return  Promise.resolve(this.value);

  }
  getDataId(id: number): Promise<ModelStructure> {
    return this.getData()
        .then(news => news.find(obj => obj.id === id));
        
}

getData1(id:any): Promise<ModelStructure[]> {
  return Promise.resolve(this.value+= id);

}

 
}
