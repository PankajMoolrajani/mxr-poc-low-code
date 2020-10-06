FROM node
EXPOSE 3000
ENV PORT=3000
COPY ./ /app
WORKDIR /app
RUN npm install
# ENTRYPOINT ["npm", "run", "start"]
# RUN /bin/sleep 216000
# ENTRYPOINT ["/bin/sleep", "216000"]