FROM openjdk:17-alpine

# 加入bash功能
RUN apk add --no-cache bash

# 將檢測MySQL是否Ready的腳本加入
COPY wait-for-it.sh /wait-for-it.sh

# 調整權限
RUN chmod +x /wait-for-it.sh

COPY xiushui_website-0.0.1-SNAPSHOT.war app.war

ENTRYPOINT ["./wait-for-it.sh", "app-db:3306", "--", "java","-jar","/app.war"]
