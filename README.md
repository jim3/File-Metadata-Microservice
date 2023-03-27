### File Metadata Microservice

One of the projects from FreeCodeCamp's **Back End Development and APIs Certification**

We were required to build a full stack JavaScript app that is functionally similar to this: https://file-metadata-microservice.freecodecamp.rocks

Luckily, we could use the multer npm package to handle file uploading.

#### Form Data

```html
<form enctype="multipart/form-data" method="POST" action="/api/fileanalyse">
  <input id="inputfield" type="file" name="upfile" />
  <input id="button" type="submit" value="Upload" />
</form>
```

### API Usage

| Input field name | Value | Description                  |
| ---------------- | ----- | ---------------------------- |
| `upfile`         | file  | The file to upload           |
| `submit`         |       | Submit the form              |
| `enctype`        |       | Set to `multipart/form-data` |
| `method`         |       | Set to `POST`                |
| `action`         |       | Set to `/api/fileanalyse`    |
| `name`           |       | Set to `upfile`              |
| `type`           |       | Set to `file`                |
| `id`             |       | Set to `inputfield`          |
| `value`          |       | Set to `Upload`              |
| `id`             |       | Set to `button`              |

#### Response

```json
{
    "name": "zjunk.txt",
    "type": "text/plain",
    "size": 38
}

{
  "name": "zcoral.reef.jpg",
  "type": "image/jpeg",
  "size": 2939796
}
```
