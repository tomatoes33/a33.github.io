package com.irental.houserent.service;

import com.irental.houserent.common.base.BaseService;
import com.irental.houserent.entity.News;

import java.util.List;

/*
 * 新闻service
 * */
public interface NewsService extends BaseService<News, Long> {

    List<News> newestNews();
}
