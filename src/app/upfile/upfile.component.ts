import { Component, OnInit } from '@angular/core';
import {NzMessageService, UploadFile} from 'ng-zorro-antd';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-upfile',
  templateUrl: './upfile.component.html',
  styleUrls: ['./upfile.component.css']
})
export class UpfileComponent implements OnInit {

  constructor(private msg: NzMessageService, private http: HttpClient) {}

  fileList = [
  ];
  previewImage = '';
  previewVisible = false;

  OcrText = '';

  // 图片上传过程中执行 在开始、上传进度、完成、失败都会调用这个函数。
  handleChange(info: any): void {
    this.previewImage = info.file.thumbUrl;
    if (info.file.message === 'OK') {
      // this.http.get('/yy/OcrUpload/' + info.file.name).subscribe(res => {
      //   // @ts-ignore
      //   this.OcrText = res;
      // });
    }
  }

  // 预览事件
  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  }

  ngOnInit() {
  }

}
