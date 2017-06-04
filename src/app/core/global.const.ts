import { INavLink } from 'app/core/contracts/INavLink';


// export const apiUrl = 'http://localhost:3000';
export const apiUrl = 'http://surveyph.heroesrider.com/api';
// export const devServerUrl = 'http://localhost:3000';
// export const webServerUrl = 'http://surveyph.heroesrider.com/api';

export const adminNavLinks : INavLink[] = [
                                {
                                    'title':'Survey',
                                    'link' : ['/admin','surveys']
                                },
                                {
                                    'title':'Category',
                                    'link' : ['/admin','surveys','category']
                                },
                                {
                                    'title':'Type',
                                    'link' : ['/admin','surveys','type']
                                }
                            ];
export const userNavLinks: INavLink[] = [
                                {
                                    'title':'Surveys',
                                    'link' : ['/surveys']
                                }
                            ];