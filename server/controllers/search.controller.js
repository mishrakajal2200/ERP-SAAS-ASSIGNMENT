// src/controllers/search.controller.js

import * as searchService from "../services/search.service.js";

export const search = async (
  req,
  res
) => {
  try {

    const data =
      await searchService.searchData({
        query: req.query.q,
        companyId: req.user.companyId,
      });

    res.status(200).json({
      success: true,
      data,
    });

  } catch (error) {

    console.log("SEARCH ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};