describe('app', function () {
    'use strict';

    var app = window.app;
    describe('generateMessage', function () {
            var text= app.generateMessage("mamutatumam");
            it('should return number of vowel and false', function(){
                expect(text.palindrome).toEqual(true);
                expect(text.vowel).toEqual(5);
            });
        it('should return number of vowel and false', function(){
            expect(app.generateMessage("aneta")).toEqual({vowel: 3, palindrome: false});
        });
        it('should return number of vowel and true', function(){
            expect(app.generateMessage("ala")).toEqual({vowel: 2, palindrome: true});
        });
    });


    describe('isPalindrome', function () {

        describe('toHaveBeenCalled', function () {
            beforeAll(function(){
                spyOn(app, 'isPalindrome');
                app.isPalindrome("kajak");
            });
            it('should call isPalindrome function', function(){
                expect(app.isPalindrome).toHaveBeenCalled();
                expect(app.isPalindrome).toHaveBeenCalledWith('kajak');
            });
        });

        describe('and.callThrough', function () {
            beforeAll(function(){
                spyOn(app, 'isPalindrome').and.callThrough();
                app.generateMessage("kajak");
            });
            it('should call isPalindrome function when generateMessage is call', function(){
                expect(app.isPalindrome).toHaveBeenCalled();
                expect(app.isPalindrome).toHaveBeenCalledWith('kajak');
            });
        });

        describe('and.returnValue', function () {
            var text;
            beforeAll(function () {
                spyOn(app, 'isPalindrome').and.returnValue(true);
            });
            it('should call isPalindrome and return true', function () {
                text = app.isPalindrome('kajak');
                expect(text).toBe(true);
            });
            it('should call generateMessage and isPalindrome should return true', function () {
                text = app.generateMessage('kajak');
                expect(text).toEqual({vowel: 2, palindrome: true});
            });
        });

        describe('and.callFake', function () {

            var text;
            beforeAll(function() {
                spyOn(app, 'isPalindrome').and.callFake(function (str) {
                    var strTemp = str.toLowerCase(),
                        strLength = strTemp.length;
                    if (str === '') {
                        return false;
                    }
                    var halfLength = (strLength % 2 === 0) ? (strLength / 2) : ((strLength - 1) / 2);
                    for (var i = 0; i < halfLength; i++) {
                        if (strTemp[i] !== strTemp.slice(-1 - i)[0]) {
                            return false;
                        }
                    }
                    return 'Hello, I am Fake Function!';
                    });
                });
            it('should notice that isPalindrome fake function', function() {
                text = app.isPalindrome('kajak');
                expect(text).toBe('Hello, I am Fake Function!');
            });
            it('should call generateMessage and isPalindrome fake function', function() {
                text = app.generateMessage('kajak');
                expect(text).toEqual({vowel: 2, palindrome: 'Hello, I am Fake Function!'})
            });

        });

        describe('calls.count()', function () {

            var text;
            beforeAll(function () {
                spyOn(app, 'isPalindrome').and.callThrough();
            });
            it('should notice that isPalindrome is call', function () {
                text = app.isPalindrome('ala');
                expect(app.isPalindrome.calls.count()).toBe(1);
            });
            it('should notice that isPalindrome is call when generateMessage is call', function () {
                text = app.generateMessage('ala');
                expect(app.isPalindrome.calls.count()).toEqual(2);
            });
        });

    });



    describe('vowelCount', function () {

        describe('toHaveBeenCalled', function () {
            beforeAll(function () {
                spyOn(app, 'vowelCount');
                app.vowelCount('kok');
            });
            it('should call vowelCount function', function () {
                expect(app.vowelCount).toHaveBeenCalled();
                expect(app.vowelCount).toHaveBeenCalledWith('kok');
            });

        });

        describe('and.callThrough', function () {
            beforeAll(function () {
                spyOn(app, 'vowelCount').and.callThrough();
                app.generateMessage('kok');
            });
            it('should call vowelCount function when generateMessage is call', function () {
                expect(app.vowelCount).toHaveBeenCalled();
                expect(app.vowelCount).toHaveBeenCalledWith('kok');
            });
        });

        describe('and.returnValue', function () {

            var text;
            beforeAll(function () {
                spyOn(app, 'vowelCount').and.returnValue(1);
            });
            it('should call vowelCount and return 1', function () {
                text = app.vowelCount('kok');
                expect(text).toBe(1);
            });
            it('should call generateMessage and vowelCount should return 1', function () {
                text = app.generateMessage('kok');
                expect(text).toEqual({vowel: 1, palindrome: true});
            });

        });

        describe('and.callFake', function () {

            var text;
            beforeAll(function() {
                spyOn(app, 'vowelCount').and.callFake(function (str) {
                    var vowelList = 'fakelist',
                        vovCount = 0;
                    for (var i = 0, strLength = str.length; i < strLength; i++) {
                        if (vowelList.indexOf(str[i]) !== -1) {
                            vovCount++;
                        }
                    }
                    return vovCount;
                });
            });
            it('should notice that isPalindrome fake function', function() {
                text = app.vowelCount('kok');
                expect(text).toBe(2);
            });
            it('should call generateMessage and isPalindrome fake function', function() {
                text = app.generateMessage('kok');
                expect(text).toEqual({ vowel: 2, palindrome: true });
            });

        });

        describe('calls.count()', function () {
            var text;
            beforeAll(function () {
                spyOn(app, 'vowelCount').and.callThrough();
            });
            it('should notice that vowelCounte is call', function () {
                text = app.vowelCount('kok');
                expect(app.vowelCount.calls.count()).toBe(1);
            });
            it('should notice that vowelCount is call when generateMessage is call', function () {
                text = app.generateMessage('kok');
                expect(app.vowelCount.calls.count()).toEqual(2);
            });

        });
    });


});

