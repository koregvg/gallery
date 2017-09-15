<template>
    <section class="footer">
        <div class="footer-wrapper" :class="type">
            <div class="footer-block">
                <div class="title">About</div>
                <i class="underline">_</i>
                <div class="content"><p>五时视觉是一家视觉设计创意公司，专注于品质的影像、</p>
                    <p>动画的创意与设计。通过设计、动画、特效及多种创新形</p>
                    <p>式，将信息与内容进行动态视觉化呈现。</p>
                </div>
            </div>
            <div class="footer-block">
                <div class="title">Service</div>
                <i class="underline">_</i>
                <div class="content">
                    <p>提供全套视觉解决方案，涵盖创意策划及执行。</p>
                    <p>服务范围: 互联网大会屏幕、MG动画（图形动画）、</p>
                    <p>新媒体交互H5、TVC广告、电影片头等。</p>
                </div>
            </div>
            <div class="footer-block">
                <div class="title">Contact</div>
                <i class="underline">_</i>
                <div class="content">
                    <p>微博：五时视觉-fiftystudio</p>
                    <p>Email:fiftystudio@sina.com</p>
                    <p>QQ:358658588 412223918 615687438</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

    export default {
        name: 'footer',
        props: {
            type: {
                type: String,
                required: false,
                default: 'large'
            }
        },
        data () {
            return {
                lightNum: 2
            }
        },
        components: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
    .footer {
        background-color: black;
        .footer-wrapper {
            &.large,&.middle{
                display: flex;
                justify-content: space-between;
                z-index: 2;
                bottom: 0;
                min-height: 150px;
                padding: 57px 0 65px 30px;
                background-color: #fff;
                overflow: hidden;
                .footer-block {
                    width: 600px;
                    display: inline-block;
                    &:last-child {
                        margin-right: 0;
                    }
                }
                .title {
                    font-family: Neosans;
                    width: inherit;
                    font-size: 36px;
                }
                .underline {
                    display: block;
                    margin-top: -25px;
                    font-size: 36px;
                }
                .content {
                    font-family: SourceHanSansCN-Regular;
                    font-size: 18px;
                    p {
                        line-height: 1.7em;
                        &:first-child {
                            margin-top: 15px;

                        }
                    }
                }
            }
            &.small{
                z-index: 2;
                bottom: 0;
                min-height: 150px;
                margin-left: 40px;
                margin-right: 40px;
                padding: 35px 60px 35px 60px;
                background-color: #fff;
                overflow: hidden;
                .footer-block {
                    letter-spacing: 4px;
                    &:not(:first-child) {
                        margin-top: 35px;
                    }
                }
                .title {
                    font-family: Neosans;
                    width: inherit;
                    font-size: 36px;
                }
                .underline {
                    display: block;
                    margin-top: -25px;
                    font-size: 36px;
                }
                .content {
                    font-family: SourceHanSansCN-Regular;
                    font-size: 18px;
                    p {
                        line-height: 1.7em;
                        &:first-child {
                            margin-top: 15px;

                        }
                    }
                }
            }
        }
    }
</style>
