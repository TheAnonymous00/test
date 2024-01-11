import React from "react";

import { Button, Img, Line, List, Text } from "components";

const Home1Page = () => {
  return (
    <>
      <div className="flex flex-col font-roboto items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-white-A700 border-b border-black-900 border-solid flex flex-col h-[72px] md:h-auto items-center justify-center max-w-[1440px] md:px-10 px-16 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1312px] mx-auto w-full">
            <div className="flex flex-row gap-8 items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start w-auto">
                <Img
                  className="h-[27px] w-[63px]"
                  src="images/img_colordark.svg"
                  alt="colordark"
                />
              </div>
              <div className="flex flex-row gap-8 items-start justify-start w-auto">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  About
                </Text>
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  Portfolio
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[900px] md:h-auto items-start justify-center max-w-[1440px] md:px-10 px-16 sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_header5.png')" }}
        >
          <div className="flex flex-col gap-6 items-start justify-start w-[560px] sm:w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <Text
                className="leading-[120.00%] max-w-[560px] md:max-w-full md:text-5xl sm:text-[42px] text-[56px] text-white-A700"
                size="txtRobotoBold56"
              >
                Captivating Scripts That Bring Stories to Life
              </Text>
              <Text
                className="leading-[150.00%] max-w-[560px] md:max-w-full text-lg text-white-A700"
                size="txtRobotoRegular18"
              >
                Experience the magic of Gujarati cinema through our compelling
                scripts. With 5 successful films under our belt, we continue to
                captivate audiences with our storytelling.
              </Text>
            </div>
            <div className="flex flex-row gap-4 items-start justify-start pt-4 w-auto">
              <Button
                className="cursor-pointer min-w-[129px] outline outline-[1px] outline-red-400 text-base text-center"
                color="red_400"
                size="sm"
              >
                Learn More
              </Button>
              <Button
                className="cursor-pointer min-w-[104px] text-base text-center"
                color="white_A700"
                size="sm"
                variant="outline"
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col md:gap-10 gap-20 items-center justify-start max-w-[1440px] md:px-10 px-16 sm:px-5 py-28 w-full">
          <div className="flex flex-col gap-6 items-center justify-start max-w-3xl w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center w-full"
              size="txtRobotoBold48"
            >
              Image Gallery
            </Text>
            <Text
              className="text-black-900 text-center text-lg w-full"
              size="txtRobotoRegular18Black900"
            >
              <>
                Explore the scriptwriter&#39;s stunning personal collection of
                photos.
              </>
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-8 items-start justify-start max-w-[1312px] mx-auto w-full">
            <div className="flex flex-1 flex-col gap-8 items-start justify-start w-full">
              <Img
                className="h-[416px] md:h-auto object-cover w-[416px] sm:w-full"
                src="images/img_placeholderimage.png"
                alt="placeholderimag"
              />
              <Img
                className="h-[416px] md:h-auto object-cover w-[416px] sm:w-full"
                src="images/img_placeholderimage.png"
                alt="placeholderimag_One"
              />
            </div>
            <div className="flex flex-1 flex-col gap-8 items-start justify-start w-full">
              <Img
                className="h-[234px] sm:h-auto object-cover w-[416px] md:w-full"
                src="images/img_placeholderimage.png"
                alt="placeholderimag_Two"
              />
              <Img
                className="h-[234px] sm:h-auto object-cover w-[416px] md:w-full"
                src="images/img_placeholderimage.png"
                alt="placeholderimag_Three"
              />
              <Img
                className="h-[416px] md:h-auto object-cover w-[416px] sm:w-full"
                src="images/img_placeholderimage.png"
                alt="placeholderimag_Four"
              />
            </div>
            <div className="flex flex-1 flex-col gap-8 items-start justify-start w-full">
              <Img
                className="h-[416px] md:h-auto object-cover w-[416px] sm:w-full"
                src="images/img_placeholderimage.png"
                alt="placeholderimag_Five"
              />
              <Img
                className="h-[416px] md:h-auto object-cover w-[416px] sm:w-full"
                src="images/img_placeholderimage.png"
                alt="placeholderimag_Six"
              />
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col md:gap-10 gap-20 items-center justify-start max-w-[1440px] md:px-10 px-16 sm:px-5 py-28 w-full">
          <div className="flex flex-col gap-4 items-center justify-start max-w-3xl w-full">
            <Text
              className="text-base text-black-900 text-center w-auto"
              size="txtRobotoSemiBold16"
            >
              Projects
            </Text>
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center w-full"
                size="txtRobotoBold48"
              >
                Discover Our Work
              </Text>
              <Text
                className="text-black-900 text-center text-lg w-full"
                size="txtRobotoRegular18Black900"
              >
                Explore our diverse portfolio of projects.
              </Text>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-16 items-center justify-start max-w-[1312px] mx-auto w-full">
            <div className="flex flex-col items-center justify-start w-auto md:w-full">
              <List
                className="sm:flex-col flex-row gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1312px] w-full"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col items-start justify-start outline outline-[1px] outline-black-900 w-full">
                  <Img
                    className="h-[400px] md:h-auto object-cover w-full"
                    src="images/img_placeholderimage_400x416.png"
                    alt="placeholderimag"
                  />
                  <div className="flex flex-col items-start justify-start p-6 sm:px-5 w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
                        size="txtRobotoBold24"
                      >
                        Project One
                      </Text>
                      <Text
                        className="leading-[150.00%] max-w-[368px] md:max-w-full text-base text-black-900"
                        size="txtRobotoRegular16"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros.
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-start pt-4 w-full">
                      <Button className="cursor-pointer font-semibold min-w-[68px] text-center text-sm">
                        Tag One
                      </Button>
                      <Button className="cursor-pointer font-semibold min-w-[69px] text-center text-sm">
                        Tag Two
                      </Button>
                      <Button className="cursor-pointer font-semibold min-w-[79px] text-center text-sm">
                        Tag Three
                      </Button>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-6 w-full">
                      <div className="flex flex-row gap-2 items-center justify-center w-[120px]">
                        <Text
                          className="text-base text-black-900 w-auto"
                          size="txtRobotoRegular16"
                        >
                          View project
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_user.svg"
                          alt="user"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start outline outline-[1px] outline-black-900 w-full">
                  <Img
                    className="h-[400px] md:h-auto object-cover w-full"
                    src="images/img_placeholderimage_400x416.png"
                    alt="placeholderimag"
                  />
                  <div className="flex flex-col items-start justify-start p-6 sm:px-5 w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
                        size="txtRobotoBold24"
                      >
                        Project Two
                      </Text>
                      <Text
                        className="leading-[150.00%] max-w-[368px] md:max-w-full text-base text-black-900"
                        size="txtRobotoRegular16"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros.
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-start pt-4 w-full">
                      <Button className="cursor-pointer font-semibold min-w-[68px] text-center text-sm">
                        Tag One
                      </Button>
                      <Button className="cursor-pointer font-semibold min-w-[69px] text-center text-sm">
                        Tag Two
                      </Button>
                      <Button className="cursor-pointer font-semibold min-w-[79px] text-center text-sm">
                        Tag Three
                      </Button>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-6 w-full">
                      <div className="flex flex-row gap-2 items-center justify-center w-[120px]">
                        <Text
                          className="text-base text-black-900 w-auto"
                          size="txtRobotoRegular16"
                        >
                          View project
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_user.svg"
                          alt="user"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-start justify-start outline outline-[1px] outline-black-900 w-full">
                  <Img
                    className="h-[400px] md:h-auto object-cover w-full"
                    src="images/img_placeholderimage_400x416.png"
                    alt="placeholderimag"
                  />
                  <div className="flex flex-col items-start justify-start p-6 sm:px-5 w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
                        size="txtRobotoBold24"
                      >
                        Project Three
                      </Text>
                      <Text
                        className="leading-[150.00%] max-w-[368px] md:max-w-full text-base text-black-900"
                        size="txtRobotoRegular16"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros.
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-start pt-4 w-full">
                      <Button className="cursor-pointer font-semibold min-w-[68px] text-center text-sm">
                        Tag One
                      </Button>
                      <Button className="cursor-pointer font-semibold min-w-[69px] text-center text-sm">
                        Tag Two
                      </Button>
                      <Button className="cursor-pointer font-semibold min-w-[79px] text-center text-sm">
                        Tag Three
                      </Button>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-6 w-full">
                      <div className="flex flex-row gap-2 items-center justify-center w-[120px]">
                        <Text
                          className="text-base text-black-900 w-auto"
                          size="txtRobotoRegular16"
                        >
                          View project
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_user.svg"
                          alt="user"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <Button
              className="cursor-pointer text-base text-center w-[104px]"
              color="black_900"
              size="sm"
              variant="outline"
            >
              View all
            </Button>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[1440px] md:px-10 px-16 sm:px-5 py-28 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-center justify-start max-w-[1312px] mx-auto w-full">
            <Img
              className="flex-1 md:flex-none h-[640px] sm:h-auto max-h-[640px] object-cover sm:w-[] md:w-[]"
              src="images/img_placeholderimage_640x616.png"
              alt="placeholderimag_Seven"
            />
            <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
              <Text
                className="leading-[120.00%] max-w-[616px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtRobotoBold40"
              >
                Explore the enthralling story and influence of an imaginative
                screenwriter.
              </Text>
              <Text
                className="leading-[150.00%] max-w-[616px] md:max-w-full text-black-900 text-lg"
                size="txtRobotoRegular18Black900"
              >
                With a passion for storytelling, she has revolutionized the
                Gujarati film industry, captivating audiences with her unique
                vision and compelling narratives. As a doctor and a
                scriptwriter, she brings a diverse range of experiences and
                perspectives to her creative work.
              </Text>
            </div>
          </div>
        </div>
        <footer className="bg-white-A700 flex flex-col items-center justify-start max-w-[1440px] px-16 md:px-5 py-28 w-full">
          <div className="flex flex-col md:gap-10 gap-[62px] items-center justify-center max-w-[1440px] w-full">
            <div className="flex flex-col h-[58px] md:h-auto items-start justify-start w-[270px]">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
                  size="txtRobotoBold48"
                >
                  Contact us
                </Text>
              </div>
            </div>
            <div className="flex flex-col md:gap-10 gap-20 items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-start w-full">
                <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start py-2 w-[500px] sm:w-full">
                  <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconenvelope.svg"
                      alt="iconenvelope"
                    />
                    <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-xl w-full"
                        size="txtRobotoBold20"
                      >
                        Email
                      </Text>
                      <Text
                        className="text-base text-black-900 underline w-full"
                        size="txtRobotoRegular16"
                      >
                        hello@relume.io
                      </Text>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconphone.svg"
                      alt="iconphone"
                    />
                    <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-black-900 text-xl w-full"
                        size="txtRobotoBold20"
                      >
                        Phone
                      </Text>
                      <Text
                        className="text-base text-black-900 underline w-full"
                        size="txtRobotoRegular16"
                      >
                        +1 (555) 000-0000
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex-1 gap-3 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 h-40 md:h-auto items-center justify-end w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconfacebook.svg"
                    alt="iconfacebook"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_info.svg"
                    alt="info"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_close.svg"
                    alt="close"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconlinkedin.svg"
                    alt="iconlinkedin"
                  />
                  <Img
                    className="h-6 w-6"
                    src="images/img_iconyoutube.svg"
                    alt="iconyoutube"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-8 items-center justify-start w-full">
                <Line className="bg-black-900 border border-black-900 border-solid h-px w-full" />
                <div className="flex sm:flex-col flex-row gap-6 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtRobotoRegular14"
                  >
                    © 2023 Relume. All rights reserved.
                  </Text>
                  <div className="flex flex-row gap-6 items-start justify-start w-auto">
                    <a
                      href="javascript:"
                      className="text-black-900 text-sm underline w-auto"
                    >
                      <Text size="txtRobotoRegular14">Privacy Policy</Text>
                    </a>
                    <a
                      href="javascript:"
                      className="text-black-900 text-sm underline w-auto"
                    >
                      <Text size="txtRobotoRegular14">Terms of Service</Text>
                    </a>
                    <Text
                      className="text-black-900 text-sm underline w-auto"
                      size="txtRobotoRegular14"
                    >
                      Cookies Settings
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home1Page;
