var app = new Vue({
  el: '#commentSection',
  data: {
    number: 0,
    name: '',
    comment: '',
    comments: {},
    questionableContent: [
      'ass',
      'Ass',
      'Fuck',
      'fuck',
      'bitch',
      'Bitch',
      'cunt',
      'vagina',
      'penis',
      'dick',
      'pussy'
    ],
    questionableComment: []
  },
  methods: {
    checkQuestionability: function() {
      let d = new Date();
      for (var i = 0; i < this.questionableContent.length; ++i) {
        if (this.addedComment.indexOf(this.questionableContent[i]) !== -1) {
          this.questionableComment.push([
            this.addedComment,
          ]);
          console.log("found a bad word!");
        }
      }
      console.log(this.questionableComment[0].text);
      console.log(this.questionableComment.length);
    },
    addComment: function() {
      if(!(this.number in this.comments))
      Vue.set(app.comments, this.number, new Array);
      let d = new Date();
      this.comments[this.number].push({
        author:this.addedName,
        text:this.addedComment,
        date:(d.getMonth()+1)+"/"+d.getDate()+"/"+d.getFullYear(),
      });
      this.checkQuestionability();
      this.addedName = '';
      this.addedComment = '';
    },

  }
});
