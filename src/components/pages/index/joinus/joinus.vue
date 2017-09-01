<template>
    <section class="page-joinus">
        <div class="container">
            <div class="joinus">
                <div class="title">Join Us</div>
                <div class="line"></div>
                <div class="content-block">
                    <p>
                        我们是一群充满热情的创意团队，在这里没有流水作业，没有枯燥的重复工作，没有严苛的上下级关系，有的是对于高品质的追求，对于艺术的坚持，以及对于知识的渴求。我们有弹性的工作制度，宽松的工作环境，高兴了可以xbox、lol，累了可以躺在沙发上看电影。我们一向有规划的进行项目，加班的情况少之又少。这样的团队欢迎你的加入，让我们一起变得更加优秀。</p>
                </div>
            </div>
            <div v-for="(value, index) in initData" class="recruit-block">
                <div class="title" v-text="value.title">视觉设计师（插画/图形）</div>
                <div class="line"></div>
                <div class="content-block">
                    <p v-if="value.description">职位描述：</p>
                    <p v-text="value.description"></p>
                    <p v-if="value.requirement" class="fix-top">职位要求：</p>
                    <p v-html="htmlEntityDecode(value.requirement)"></p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

    import axios from 'axios';
    import headerNav from '@/components/pages/header/header';

    export default {
        name: 'about',
        data () {
            return {
                lightNum: 2,
                initData: ''
            }
        },
        components: {
            headerNav
        },
        created() {
            var self = this;

            axios({
                method: "POST",
                url: 'index.php?m=Home&c=Index&a=joinUs',
            }).then(response => {
                self.initData = response.data;
            }).catch(err => {
                console.log(err);
            });
        },
        methods: {
            htmlEntityDecode(value){
                return value
                        .replace(value ? /&(?!#?\w+;)/g : /&/g, '&amp;')
                        .replace(/&lt;/g, "<")
                        .replace(/&gt;/g, ">")
                        .replace(/&quot;/g, "\"")
                        .replace(/&#39;/g, "\'");
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped rel="stylesheet/less">
    .page-joinus {
        background-color: #000;
        .container {
            padding-top: 60px;
            background-color: black;
            width: 100%;
            .joinus {
                position: relative;
                padding: 0 30px 90px 30px;
                color: #fff;
                overflow: hidden;
                .title {
                    font-family: Neosans;
                    font-size: 60px;
                    margin-bottom: 100px;
                }
                .line {
                    height: 0;
                    width: 26px;
                    border-top: 4px solid #fff;
                    margin-bottom: 40px;
                }
                .content-block {
                    font-family: SourceHanSansCN-Regular;
                    font-size: 18px;
                    line-height: 1.8em;
                    p {
                        width: 1325px
                    }
                }
            }
            .recruit-block {
                min-height: 315px;
                padding-top: 50px;
                padding-left: 30px;
                padding-bottom: 70px;
                &:nth-child(odd) {
                    color: #fff;
                    background-color: #000;
                    .line {
                        border-top: 4px solid #fff;
                    }
                }
                &:nth-child(even) {
                    color: #000;
                    background-color: #fff;
                    .line {
                        border-top: 4px solid #000;
                    }
                }
                &:last-child {
                    margin-bottom: 35px;
                }
                .title {
                    font-family: SourceHanSansCN-Regular;
                    font-size: 36px;
                    margin-bottom: 40px;
                }
                .line {
                    height: 0;
                    width: 26px;
                    margin-bottom: 40px;
                }
                .content-block {
                    font-family: SourceHanSansCN-Regular;
                    font-size: 18px;
                    line-height: 1.8em;
                    p {
                        width: 1325px
                    }
                    .fix-top {
                        margin-top: 25px;
                    }
                }
            }
        }
    }
</style>
